import { Module } from "@nestjs/common";

import { PrismaModule } from "@modules/prisma/prisma.module";

import { AuthorController } from "@modules/author/author.controller";
import { AuthorService } from "@modules/author/author.service";

@Module({
	imports: [PrismaModule],
	controllers: [AuthorController],
	providers: [AuthorService],
	exports: [AuthorService],
})
export class AuthorModule {}
