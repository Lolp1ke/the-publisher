import * as process from "process";

export const MainConfig = {
	BACKEND_HOST: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT,
	STORAGE_ENTRY_POINT: process.env.NEXT_PUBLIC_STORAGE_ENTRY_POINT,
};
