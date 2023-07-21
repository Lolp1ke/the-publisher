import { Module } from "@nestjs/common";

import { AuthorController } from "@modules/author/author.controller";
import { AuthorService } from "@modules/author/author.service";

@Module({
	controllers: [AuthorController],
	providers: [AuthorService],
	exports: [AuthorService],
})
export class AuthorModule {}
