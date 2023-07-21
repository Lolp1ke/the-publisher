import { Injectable } from "@nestjs/common";

@Injectable()
export class ObjectHelper {
	public removeNulls(object: object): object {
		for (const key in object) {
			if (!object[key]) delete object[key];
		}

		return object;
	}

	public parseNumbers(object: object): object {
		for (const key in object) {
			const parsedValue = parseInt(object[key]);
			if (!isNaN(object[key])) object[key] = parsedValue;
		}

		return object;
	}
}
