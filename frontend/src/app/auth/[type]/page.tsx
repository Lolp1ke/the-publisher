import Auth from "@routes/Auth/Auth";
import { redirect } from "next/navigation";

export default function page({ params }: { params: { type: string } }) {
	const type = params.type === "sign-in" ? true : params.type === "sign-up" ? false : redirect("/");

	return <Auth isLogin={type} />;
}
