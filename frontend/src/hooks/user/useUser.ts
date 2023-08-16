import { cookies } from "next/headers";
import type { AxiosResponse } from "axios";

import { Axios } from "@lib/axios/axios";

import type { TUser } from "@hooks/user/types";

interface useUserProps {
	user: TUser | null;
}

export async function useUser(): Promise<useUserProps> {
	const sessionId = cookies().get("sessionId")?.value;
	function get() {}

	async function getMe() {
		if (!sessionId) return null;

		return await Axios({
			url: "/user/get-me",
			params: {
				sessionId,
			},
		})
			.then((response: AxiosResponse<TUser>) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);

				return null;
			});
	}

	const user: TUser | null = await getMe();
	return {
		user,
	};
}
