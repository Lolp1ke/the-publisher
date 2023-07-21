import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { PrismaService } from "@root/prisma/prisma.service";

import { CreateSessionDto, GetSessionDto, UpdateSessionDto } from "@routes/session/dto";

@Injectable()
export class SessionService {
	private readonly expirationDate: Date = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7);
	constructor(private readonly prismaService: PrismaService) {}

	public async create(dto: CreateSessionDto) {
		dto.ip = dto.ip.replace(/[^\d.]/g, "");

		return await this.prismaService.session
			.create({
				data: {
					user: {
						connect: {
							id: dto.userId,
						},
					},
					ip: dto.ip,
					device: dto.device,
					expirationDate: this.expirationDate,
				},
			})
			.then((session) => {
				return session;
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}

	public async update(dto: UpdateSessionDto) {
		await this.prismaService.session
			.update({
				where: {
					id: dto.sessionId,
				},
				data: {
					expirationDate: this.expirationDate,
				},
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}

	public async get(dto: GetSessionDto) {
		return await this.prismaService.session
			.findUnique({
				where: {
					id: dto.sessionId,
				},
			})
			.then((session) => {
				return session;
			});
	}
}
