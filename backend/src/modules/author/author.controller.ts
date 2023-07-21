import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";

import { AuthorService } from "@modules/author/author.service";
import { CreateAuthorDto } from "@modules/author/dto";

@Controller("/author")
export class AuthorController {
	constructor(private readonly authorService: AuthorService) {}

	@HttpCode(HttpStatus.OK)
	@Post("/create")
	public async create(@Body() dto: CreateAuthorDto) {
		return await this.authorService.create(dto);
	}
}
