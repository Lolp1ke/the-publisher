declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly NEXT_PUBLIC_BACKEND_ENDPOINT: string;
			readonly NEXT_PUBLIC_STORAGE_ENTRY_POINT: string;
		}
	}
}

export {};
