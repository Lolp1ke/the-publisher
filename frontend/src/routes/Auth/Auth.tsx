"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useAuth } from "@context/auth/useAuth";

import Logo from "@ui/Logo/Logo";
import Input from "@ui/Input/Input";

import "./styles/auth.scss";

interface AuthProps {
	isLogin: boolean;
}

export default function Auth({ isLogin }: AuthProps) {
	const { localSignUp, localSignIn } = useAuth();

	const [isProceed, setIsProceed] = useState<boolean>(false);

	const usernameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	return (
		<div className="auth">
			<form
				className="auth__form"
				onSubmit={async (event) => {
					event.preventDefault();
					if (!usernameRef.current || !emailRef.current || !passwordRef.current) return;

					isLogin
						? await localSignIn({
								username: usernameRef.current.value,
								password: passwordRef.current.value,
						  })
						: await localSignUp({
								username: usernameRef.current.value,
								email: emailRef.current.value,
								password: passwordRef.current.value,
						  });
				}}
			>
				<Logo showLocation={false} />
				<div className="auth__types">
					<Link href={"/auth/sign-in"} className={"auth__type" + " " + (isLogin ? "active" : "")}>
						Log in
					</Link>
					<Link href={"/auth/sign-up"} className={"auth__type" + " " + (!isLogin ? "active" : "")}>
						Sign up
					</Link>
				</div>
				<div className="auth__inputs">
					<Input
						type={"text"}
						placeholder={"Username"}
						icon={"/assets/icons/auth/user.svg"}
						required={true}
						ref={usernameRef}
					/>
					<Input
						type={"email"}
						placeholder={"Poshta@mail.kz"}
						icon={"/assets/icons/auth/mail.svg"}
						style={{
							display: isLogin ? "none" : "flex",
						}}
						required={!isLogin}
						ref={emailRef}
					/>
					<Input
						type={"password"}
						placeholder={"Password"}
						icon={"/assets/icons/auth/lock.svg"}
						required={true}
						ref={passwordRef}
					/>
				</div>
				<button className="auth__forgot" type={"button"}>
					Forgot your password?
				</button>
				<button className="auth__submit" type={"submit"}>
					{isLogin ? "Log in" : isProceed ? "Sign up" : "Proceed"}
				</button>
				<div
					className="auth__other"
					style={{
						display: isLogin ? "flex" : "none",
					}}
				>
					<p className="auth__other-text">or</p>
					<p className="auth__other-auth">Log in with</p>
					<div className="auth__methods">
						<button className="auth__method" type={"button"}>
							<Image
								src={"/assets/icons/auth/google.svg"}
								alt={"google"}
								width={48}
								height={48}
								draggable={false}
							/>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
