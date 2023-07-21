import { ConflictException, Injectable } from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";

import { CreateAdminDto } from "@modules/admin/dto";

@Injectable()
export class AdminService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create(dto: CreateAdminDto) {
		const exist = await this.prismaService.admin.findUnique({
			where: {
				userId: dto.userId,
			},
		});
		if (exist) throw new ConflictException("You are already an Admin");

		return await this.prismaService.admin
			.create({
				data: {
					user: {
						connect: {
							id: dto.userId,
						},
					},
				},
			})
			.then((user) => {
				return user;
			});
	}
}
