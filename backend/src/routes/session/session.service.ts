import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { PrismaService } from "@root/prisma/prisma.service";

import { CreateSessionDto } from "@routes/session/dto";

@Injectable()
export class SessionService {
	private readonly maxTime: number = 1000 * 60 * 60 * 24 * 7;
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
					expirationDate: new Date(new Date().getTime() + this.maxTime),
				},
			})
			.then((session) => {
				return session;
			})
			.catch(() => {
				throw new InternalServerErrorException();
			});
	}
}
