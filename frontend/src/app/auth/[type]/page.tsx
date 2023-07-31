import { redirect } from "next/navigation";

import { AuthProvider } from "@context/auth/useAuth";

import Auth from "@routes/Auth/Auth";

export default function page({ params }: { params: { type: string } }) {
	const type = params.type === "sign-in" ? true : params.type === "sign-up" ? false : redirect("/");

	return (
		<AuthProvider>
			<Auth isLogin={type} />
		</AuthProvider>
	);
}
