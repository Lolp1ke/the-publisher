import { Body, Controller, HttpCode, HttpStatus, Post, Put, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";

import { PostService } from "@modules/post/post.service";
import { AddMediaDto, CreatePostDto, UpdatePostDto } from "@modules/post/dto";

@Controller("/post")
export class PostController {
	constructor(private readonly postService: PostService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post("/create")
	public async create(@Body() dto: CreatePostDto) {
		return await this.postService.create(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Put("/update")
	public async update(@Body() dto: UpdatePostDto) {
		return await this.postService.update(dto);
	}

	@Put("/add-image")
	@UseInterceptors(FilesInterceptor("files", 3))
	public async addImage(@Body() dto: AddMediaDto, @UploadedFiles() files: Express.Multer.File[]) {
		return await this.postService.addImage(dto, files);
	}
}
