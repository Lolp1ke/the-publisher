import { Module } from "@nestjs/common";

import { PrismaModule } from "@modules/prisma/prisma.module";

import { SessionController } from "@modules/session/session.controller";
import { SessionService } from "@modules/session/session.service";

@Module({
	imports: [PrismaModule],
	controllers: [SessionController],
	providers: [SessionService],
	exports: [SessionService],
})
export class SessionModule {}
