import { Module } from "@nestjs/common";

import { StringHelper } from "@helpers/string/string.helper";

@Module({
	providers: [StringHelper],
	exports: [StringHelper],
})
export class HelperModule {}
