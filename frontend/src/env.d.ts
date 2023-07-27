declare global {
	// eslint-disable-next-line no-unused-vars
	namespace NodeJS {
		// eslint-disable-next-line no-unused-vars
		interface ProcessEnv {
			NEXT_PUBLIC_BACKEND_ENDPOINT: string;
		}
	}
}

export {};
