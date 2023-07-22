declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly BACKEND_PORT: string;

			readonly GOOGLE_ROOT_EMAIL: string;
			readonly GOOGLE_PROJECT_ID: string;
			readonly GOOGLE_KEY_FILE_NAME: string;
			readonly GOOGLE_CLIENT_ID: string;
			readonly GOOGLE_CLIENT_SECRET: string;
			readonly GOOGLE_REDIRECT_URI: string;
			readonly GOOGLE_REFRESH_TOKEN: string;
			readonly GOOGLE_BUCKET_NAME: string;
		}
	}
}

export {};
