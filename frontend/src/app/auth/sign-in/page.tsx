"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { useAuth } from "@context/auth/useAuth";

import Logo from "@ui/Logo/Logo";
import Input from "@ui/Input/Input";

export default function Auth() {
	const { localSignIn } = useAuth();

	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	return (
		<div className="auth">
			<form
				className="auth__form"
				onSubmit={async (event) => {
					event.preventDefault();
					if (!usernameRef.current || !passwordRef.current) return;

					await localSignIn({
						username: usernameRef.current.value,
						password: passwordRef.current.value,
					});
				}}
			>
				<Logo showLocation={false} />
				<div className="auth__types">
					<Link href={"/auth/sign-in"} className={"auth__type active"}>
						Log in
					</Link>
					<Link href={"/auth/sign-up"} className={"auth__type"}>
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
					Log in
				</button>
				<div className="auth__other">
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
