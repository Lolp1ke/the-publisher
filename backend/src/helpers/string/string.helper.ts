import { Injectable } from "@nestjs/common";
import { compareSync, hashSync } from "bcrypt";

@Injectable()
export class StringHelper {
	public normalizer(value: string): string {
		return value.replace(/ /g, "").toLowerCase();
	}

	public hash(value: string): string {
		return hashSync(value, 8);
	}
	public compare(value: string, encrypted: string): boolean {
		return compareSync(value, encrypted);
	}
}
