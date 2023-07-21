import {
	BadRequestException,
	ConflictException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";
import { SessionService } from "@modules/session/session.service";

import { StringHelper } from "@helpers/string/string.helper";
import { ObjectHelper } from "@helpers/object/object.helper";

import { CreateUserDto, GetUserDto, ValidateUserDto } from "@modules/user/dto";
import { GetSessionDto } from "@modules/session/dto";
import { FilterDto } from "@root/types";

@Injectable()
export class UserService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly sessionService: SessionService,
		private readonly stringHelper: StringHelper,
		private readonly objectHelper: ObjectHelper
	) {}

	public async create(dto: CreateUserDto) {
		dto.username = this.stringHelper.normalizer(dto.username);
		dto.email = this.stringHelper.normalizer(dto.email);

		const exist = await this.prismaService.user.findMany({
			where: {
				username: dto.username,
				email: dto.email,
			},
		});

		if (exist.length > 0) throw new ConflictException("Username/Email already taken");

		dto.password = this.stringHelper.hash(dto.password);
		return await this.prismaService.user
			.create({
				data: dto,
			})
			.then((user) => {
				return user;
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}

	public async validate(dto: ValidateUserDto) {
		dto.username = this.stringHelper.normalizer(dto.username);

		const user = await this.get({ username: dto.username });

		const comparedPassword = this.stringHelper.compare(dto.password, user.password);
		if (!comparedPassword) throw new UnauthorizedException();

		return user;
	}

	public async get(dto: GetUserDto) {
		if (!dto.username) throw new BadRequestException("Provide with username");
		dto.username = this.stringHelper.normalizer(dto.username);

		return await this.prismaService.user
			.findUnique({
				where: {
					username: dto.username,
				},
			})
			.then((user) => {
				return user;
			})
			.catch(() => {
				throw new NotFoundException();
			});
	}

	public async getAll(dto: FilterDto) {
		dto = this.objectHelper.removeNulls(dto);
		dto = this.objectHelper.parseNumbers(dto);

		return await this.prismaService.user
			.findMany(dto)
			.then((users) => {
				return users;
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}

	public async getMe(dto: GetSessionDto) {
		if (!dto.sessionId) throw new UnauthorizedException("Provide with session id");

		const session = await this.sessionService.get(dto);
		if (session.expirationDate.getTime() - new Date().getTime() < 0)
			throw new UnauthorizedException("Session has been expired");

		return await this.prismaService.user
			.findUnique({
				where: {
					id: session.userId,
				},
			})
			.then((user) => {
				delete user.password;
				return user;
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}
}
