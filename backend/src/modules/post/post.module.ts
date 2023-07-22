import { Module } from "@nestjs/common";

import { PrismaModule } from "@modules/prisma/prisma.module";
import { StorageModule } from "@api/google/storage/storage.module";

import { PostController } from "@modules/post/post.controller";
import { PostService } from "@modules/post/post.service";

@Module({
	imports: [PrismaModule, StorageModule],
	controllers: [PostController],
	providers: [PostService],
	exports: [PostService],
})
export class PostModule {}
