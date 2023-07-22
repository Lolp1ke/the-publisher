import { Module } from "@nestjs/common";

import { AuthModule } from "@modules/auth/auth.module";
import { AuthorModule } from "@modules/author/author.module";
import { PostModule } from "@modules/post/post.module";

@Module({
	imports: [AuthModule, AuthorModule, PostModule],
})
export class AppModule {}
