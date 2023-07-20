import { Injectable } from "@nestjs/common";

import { UserService } from "@routes/user/user.service";
import { SessionService } from "@routes/session/session.service";

import { CreateUserDto } from "@routes/user/dto";
import { SessionDataDto } from "@routes/session/dto";

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
}
