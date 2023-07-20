import { Injectable } from "@nestjs/common";

@Injectable()
export class StringHelper {
	public normalizer(value: string): string {
		return value.replace(/ /g, "").toLowerCase();
	}
}
