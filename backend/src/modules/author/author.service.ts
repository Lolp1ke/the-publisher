import { Injectable } from "@nestjs/common";
import { PrismaService } from "@modules/prisma/prisma.service";

@Injectable()
export class AuthorService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create() {}
}
