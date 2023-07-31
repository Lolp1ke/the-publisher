"use client";
import { createContext, ReactNode, useContext } from "react";
import { useCookies } from "react-cookie";
import { AxiosResponse } from "axios";

import { Axios } from "@lib/axios/axios";

import { ILocalSignIn, ILocalSignUp } from "@context/auth/types";
import { useRouter } from "next/navigation";

interface AuthContextProps {
	localSignIn: (props: ILocalSignIn) => Promise<void>;
	localSignUp: (props: ILocalSignUp) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function useAuth(): AuthContextProps {
	return useContext<AuthContextProps>(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const { push } = useRouter();
	const [, setCookie] = useCookies(["sessionId"]);

	async function localSignUp(props: ILocalSignUp) {
		await Axios({
			method: "POST",
			url: "/auth/local/sign-up",
			data: props,
		}).then((response: AxiosResponse<string>) => {
			setCookie("sessionId", response.data, {
				path: "/",
			});
			// push("/");
		});
	}

	async function localSignIn(props: ILocalSignIn) {
		await Axios({
			method: "POST",
			url: "/auth/local/sign-in",
			data: props,
		}).then((response: AxiosResponse<string>) => {
			setCookie("sessionId", response.data, {
				path: "/",
			});
			push("/profile");
		});
	}

	const values: AuthContextProps = {
		localSignUp,
		localSignIn,
	};
	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
