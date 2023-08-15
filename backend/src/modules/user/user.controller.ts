import { Body, Controller, Get, HttpCode, HttpStatus, Put, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

import { UserService } from "@modules/user/user.service";

import { GetUserDto, SetProfilePictureDto } from "@modules/user/dto";
import { GetSessionDto } from "@modules/session/dto";
import { FilterDto } from "dto";

@Controller("/user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@HttpCode(HttpStatus.OK)
	@Get("/get")
	public async get(@Query() dto: GetUserDto) {
		return await this.userService.get(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get-all")
	public async getAll(@Query() dto: FilterDto) {
		return await this.userService.getAll(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get-me")
	public async getMe(@Query() dto: GetSessionDto) {
		return await this.userService.getMe(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Put("/set-profile-picture")
	@UseInterceptors(FileInterceptor("file"))
	public async setProfilePicture(@Body() dto: SetProfilePictureDto, @UploadedFile() file: Express.Multer.File) {
		return await this.userService.setProfileImage(dto, file);
	}
}
