import {
	ConflictException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";

import { PrismaService } from "@root/prisma/prisma.service";
import { StringHelper } from "@helpers/string/string.helper";

import { CreateUserDto, GetUserDto, ValidateUserDto } from "@routes/user/dto";

@Injectable()
export class UserService {
	constructor(private readonly prismaService: PrismaService, private readonly stringHelper: StringHelper) {}

	public async create(dto: CreateUserDto) {
		dto.username = this.stringHelper.normalizer(dto.username);
		dto.email = this.stringHelper.normalizer(dto.email);

		this.prismaService.user.findMany().then((users) => {
			console.log(users);
		});

		const exist = await this.prismaService.user
			.findUnique({
				where: {
					username: dto.username,
					email: dto.email,
				},
			})
			.then((user) => {
				return user;
			});
		if (exist) throw new ConflictException();

		dto.password = this.stringHelper.hash(dto.password);
		return await this.prismaService.user
			.create({
				data: dto,
			})
			.then((user) => {
				return user;
			})
			.catch(() => {
				throw new InternalServerErrorException();
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
}
