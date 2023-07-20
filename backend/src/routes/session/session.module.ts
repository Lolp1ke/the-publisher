import { Module } from "@nestjs/common";

import { PrismaModule } from "@root/prisma/prisma.module";

import { SessionController } from "@routes/session/session.controller";
import { SessionService } from "@routes/session/session.service";

@Module({
	imports: [PrismaModule],
	controllers: [SessionController],
	providers: [SessionService],
})
export class SessionModule {}
