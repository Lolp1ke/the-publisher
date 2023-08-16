import { AuthProvider } from "@context/auth/useAuth";
import type { ReactNode } from "react";

import "@root/app/auth/_styles/auth.scss";
import { useUser } from "@hooks/user/useUser";
import { redirect } from "next/navigation";

interface LayoutProps {
	children: ReactNode;
}

export default async function layout({ children }: LayoutProps) {
	const { user } = await useUser();
	if (user) return redirect("/home");

	return <AuthProvider>{children}</AuthProvider>;
}
