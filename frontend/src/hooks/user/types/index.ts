export type TUser = {
	readonly id: string;
	readonly username: string;
	readonly email: string;
	readonly emailStatus: boolean;
	readonly firstName: string | null;
	readonly lastName: string | null;
	readonly country: string | null;
	readonly city: string | null;
	readonly school: string | null;
	readonly bio: string | null;
	readonly profilePictureURL: string | null;
	readonly createdAt: Date;
	readonly alteredAt: Date;
};
