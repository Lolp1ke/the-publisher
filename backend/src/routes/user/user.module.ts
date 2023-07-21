import { Module } from "@nestjs/common";

import { PrismaModule } from "@root/prisma/prisma.module";
import { SessionModule } from "@routes/session/session.module";
import { HelperModule } from "@helpers/helper.module";

import { UserController } from "@routes/user/user.controller";
import { UserService } from "@routes/user/user.service";

@Module({
	imports: [PrismaModule, SessionModule, HelperModule],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
