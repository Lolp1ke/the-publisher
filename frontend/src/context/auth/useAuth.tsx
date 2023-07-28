import { createContext, ReactNode, useContext } from "react";
import { useCookies } from "react-cookie";
import { AxiosResponse } from "axios";

import { Axios } from "@lib/axios/axios";

import { ILocalSignIn, ILocalSignUp } from "@context/auth/types";

interface AuthContextProps {
	// eslint-disable-next-line no-unused-vars
	localSignIn: (props: ILocalSignIn) => Promise<void>;
	// eslint-disable-next-line no-unused-vars
	localSignUp: (props: ILocalSignUp) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function useAuth(): AuthContextProps {
	return useContext<AuthContextProps>(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const [, setCookie] = useCookies(["sessionId"]);

	async function localSignUp() {}

	async function localSignIn(props: ILocalSignIn) {
		await Axios.post("/auth/local/sign-in", props).then((response: AxiosResponse) => {
			setCookie("sessionId", response.data);
		});
	}

	const values: AuthContextProps = {
		localSignUp,
		localSignIn,
	};
	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
