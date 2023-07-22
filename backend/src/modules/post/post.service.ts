import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";
import { StorageService } from "@api/google/storage/storage.service";

import { AddMediaDto, CreatePostDto, UpdatePostDto } from "@modules/post/dto";

@Injectable()
export class PostService {
	constructor(private readonly prismaService: PrismaService, private readonly storageService: StorageService) {}

	public async create(dto: CreatePostDto) {
		console.log(dto);
		return await this.prismaService.post
			.create({
				data: {
					author: {
						connect: {
							id: dto.authorId,
						},
					},

					title: dto.title,
					text: dto.text,
					genra: dto.genra,

					links: dto.links,
				},
			})
			.then((post) => {
				return post;
			});
	}

	public async update(dto: UpdatePostDto) {
		await this.prismaService.post
			.update({
				where: {
					id: dto.postId,
				},
				data: {
					title: dto.title,
					text: dto.text,
					genra: dto.genra,

					links: dto.links,
				},
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async addImage(dto: AddMediaDto, files: Express.Multer.File[]) {
		const post = await this.prismaService.post
			.findUnique({
				where: {
					id: dto.postId,
				},
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});

		const imageURLs: string[] = post.photoURLs;
		for (const file of files) {
			await this.storageService.upload(file, `posts/${dto.postId}`).then((mediaURL) => {
				imageURLs.push(mediaURL);
			});
		}

		await this.prismaService.post
			.update({
				where: {
					id: dto.postId,
				},
				data: {
					photoURLs: imageURLs,
				},
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}
}
