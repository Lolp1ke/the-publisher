import { Body, Controller, Headers, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { Request } from "express";

import { AuthService } from "@modules/auth/auth.service";

import { CreateUserDto, ValidateUserDto } from "@modules/user/dto";

@Controller("/auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post("/local/sign-up")
	public async localSignUp(@Body() dto: CreateUserDto, @Headers("user-agent") device, @Req() req: Request) {
		return await this.authService.localSignUp(dto, {
			ip: req.ip,
			device: device,
		});
	}

	@HttpCode(HttpStatus.OK)
	@Post("/local/sign-in")
	public async localSignIn(@Body() dto: ValidateUserDto, @Headers("user-agent") device, @Req() req: Request) {
		return await this.authService.localSignIn(dto, {
			ip: req.ip,
			device: device,
		});
	}
}
