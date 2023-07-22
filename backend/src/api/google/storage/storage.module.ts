import { Module } from "@nestjs/common";

import { StorageService } from "@root/api/google/storage/storage.service";

@Module({
	providers: [StorageService],
	exports: [StorageService],
})
export class StorageModule {}
