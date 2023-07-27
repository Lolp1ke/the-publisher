import { Module } from "@nestjs/common";

import { GmailService } from "@api/google/gmail/gmail.service";

@Module({
	providers: [GmailService],
	exports: [GmailService],
})
export class GmailModule {}
