import { Module } from "@nestjs/common";

import { PrismaModule } from "@modules/prisma/prisma.module";
import { SessionModule } from "@modules/session/session.module";
import { StorageModule } from "@api/google/storage/storage.module";
import { HelperModule } from "@helpers/helper.module";

import { UserController } from "@modules/user/user.controller";
import { UserService } from "@modules/user/user.service";

@Module({
	imports: [PrismaModule, SessionModule, StorageModule, HelperModule],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
