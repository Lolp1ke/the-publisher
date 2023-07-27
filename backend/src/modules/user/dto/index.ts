export class CreateUserDto {
	username: string;
	password: string;

	email: string;

	readonly firstName?: string;
	readonly lastName?: string;

	readonly country?: string;
	readonly city?: string;
	readonly school?: string;
}

export class ValidateUserDto {
	username: string;
	password: string;
}

export class GetUserDto {
	username: string;
}

export class SetProfilePictureDto {
	readonly userId: string;
}
