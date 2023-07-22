import * as process from "process";

export const GoogleConfig = {
	rootEmail: process.env.GOOGLE_ROOT_EMAIL,

	projectId: process.env.GOOGLE_PROJECT_ID,
	clientId: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,

	redirectURI: process.env.GOOGLE_REDIRECT_URI,

	refreshToken: process.env.GOOGLE_REFRESH_TOKEN,

	keyFileName: process.env.GOOGLE_KEY_FILE_NAME,

	bucketName: process.env.GOOGLE_BUCKET_NAME,
};
