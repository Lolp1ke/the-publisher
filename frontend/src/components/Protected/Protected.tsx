import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { useUser } from "@hooks/user/useUser";

export default async function Protected({ children }: { children: ReactNode }) {
	const { user } = await useUser();
	if (!user) return redirect("/home");

	return <>{children}</>;
}
