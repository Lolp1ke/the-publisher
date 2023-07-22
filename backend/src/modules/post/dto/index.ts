export class CreatePostDto {
	readonly authorId: string;

	readonly title: string;
	readonly text: string;
	readonly genra: string[];

	readonly links: string[];
}

export class UpdatePostDto extends CreatePostDto {
	readonly postId: string;
}

export class AddMediaDto {
	readonly postId: string;
}
