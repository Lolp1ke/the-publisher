import { Injectable } from "@nestjs/common";

@Injectable()
export class ObjectHelper {
	public removeNulls(object: object) {
		for (const item in object) {
			if (!object[item]) delete object[item];
		}
	}
}
