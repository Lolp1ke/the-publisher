import { Body, Controller, Headers, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { Request } from "express";

import { AuthService } from "@routes/auth/auth.service";

import { CreateUserDto } from "@routes/user/dto";

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
}
