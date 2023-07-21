import { Injectable } from "@nestjs/common";

import { UserService } from "@modules/user/user.service";
import { SessionService } from "@modules/session/session.service";

import { CreateUserDto, ValidateUserDto } from "@modules/user/dto";
import { SessionDataDto } from "@modules/session/dto";

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService, private readonly sessionService: SessionService) {}

	public async localSignUp(dto: CreateUserDto, sessionDataDto: SessionDataDto) {
		const user = await this.userService.create(dto);

		return await this.sessionService
			.create({
				userId: user.id,
				ip: sessionDataDto.ip,
				device: sessionDataDto.device,
			})
			.then((session) => {
				return session.id;
			});
	}

	public async localSignIn(dto: ValidateUserDto, sessionDataDto: SessionDataDto) {
		const user = await this.userService.validate(dto);

		return await this.sessionService
			.create({
				userId: user.id,
				ip: sessionDataDto.ip,
				device: sessionDataDto.device,
			})
			.then((session) => {
				return session.id;
			});
	}
}
