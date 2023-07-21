import { Module } from "@nestjs/common";

import { AuthModule } from "@modules/auth/auth.module";
import { AuthorModule } from "@modules/author/author.module";

@Module({
	imports: [AuthModule, AuthorModule],
})
export class AppModule {}
