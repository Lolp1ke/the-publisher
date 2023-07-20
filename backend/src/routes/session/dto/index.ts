export class SessionDataDto {
	ip: string;
	readonly device: string;
}

export class CreateSessionDto extends SessionDataDto {
	readonly userId: string;
}
