export class SessionDataDto {
	ip: string;
	readonly device: string;
}

export class CreateSessionDto extends SessionDataDto {
	readonly userId: string;
}

export class UpdateSessionDto {
	readonly sessionId: string;
}

export class GetSessionDto {
	readonly sessionId: string;
}
