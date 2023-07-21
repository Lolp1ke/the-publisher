import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";

import { CreateAuthorDto } from "@modules/author/dto";

@Injectable()
export class AuthorService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create(dto: CreateAuthorDto) {
		return await this.prismaService.author
			.create({
				data: {
					user: {
						connect: {
							id: dto.userId,
						},
					},
				},
			})
			.then((author) => {
				return author;
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}
}
