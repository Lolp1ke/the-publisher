import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { MainConfig } from "./config/main";

import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.setGlobalPrefix("/api/v1");
	app.enableCors({
		origin: true,
	});

	await app.listen(MainConfig.PORT);
}

bootstrap().then(() => {
	console.log("Server listening on port:", MainConfig.PORT);
});
