import { Module } from "@nestjs/common";

import { UserModule } from "@routes/user/user.module";
import { SessionModule } from "@routes/session/session.module";

import { AuthController } from "@routes/auth/auth.controller";
import { AuthService } from "@routes/auth/auth.service";

@Module({
	imports: [UserModule, SessionModule],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}
