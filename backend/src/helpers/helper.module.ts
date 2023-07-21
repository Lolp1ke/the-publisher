import { Module } from "@nestjs/common";

import { StringHelper } from "@helpers/string/string.helper";
import { ObjectHelper } from "@helpers/object/object.helper";

@Module({
	providers: [StringHelper, ObjectHelper],
	exports: [StringHelper, ObjectHelper],
})
export class HelperModule {}
