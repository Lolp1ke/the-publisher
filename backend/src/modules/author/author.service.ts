import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";

import { CreateAuthorDto } from "@modules/author/dto";

@Injectable()
export class AuthorService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create(dto: CreateAuthorDto) {
		const exist = await this.prismaService.author.findUnique({
			where: {
				userId: dto.userId,
			},
		});
		if (exist) throw new ConflictException("You already an author");

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

	public async checkUser(userId: string) {
		return await this.prismaService.author
			.findUnique({
				where: {
					userId,
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
