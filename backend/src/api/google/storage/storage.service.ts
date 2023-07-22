import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Bucket, Storage } from "@google-cloud/storage";

import { GoogleConfig } from "@config/google";

@Injectable()
export class StorageService {
	private readonly bucket: Bucket = new Storage({
		projectId: GoogleConfig.projectId,
		keyFilename: GoogleConfig.keyFileName,
	}).bucket(GoogleConfig.bucketName);
	private readonly entryPoint: string = `https://storage.googleapis.com/${GoogleConfig.bucketName}`;

	public async upload(file: Express.Multer.File, filePath: string) {
		const fileName = `${new Date()
			.toLocaleDateString("en-US", {
				year: "numeric",
				month: "numeric",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZone: "Asia/Almaty",
			})
			.replace(/\//g, "-")}-${file.originalname}`;

		const fileStream = this.bucket.file(`${filePath}/${fileName}`).createWriteStream({
			metadata: {
				contentType: file.mimetype,
			},
		});

		fileStream.on("error", (error) => {
			throw new InternalServerErrorException(error);
		});
		fileStream.end(file.buffer);

		return `${filePath}/${fileName}`;
	}
}
