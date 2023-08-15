"use client";
import { useRef, useState } from "react";
import Link from "next/link";

import { useAuth } from "@context/auth/useAuth";

import Logo from "@ui/Logo/Logo";
import Input from "@ui/Input/Input";

import { countries } from "./countries";
import Image from "next/image";

export default function page() {
	const { localSignUp } = useAuth();

	const [isProceed, setIsProceed] = useState<boolean>(true);

	const [countryInput, setCountryInput] = useState<string>("");
	const [country, setCountry] = useState<string>("");

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

					await localSignUp({
						username: usernameRef.current.value,
						email: emailRef.current.value,
						password: passwordRef.current.value,
					});
				}}
			>
				<Logo showLocation={false} />
				<div
					className="auth__types"
					style={{
						display: isProceed ? "flex" : "none",
					}}
				>
					<Link href={"/auth/sign-in"} className={"auth__type"}>
						Log in
					</Link>
					<Link href={"/auth/sign-up"} className={"auth__type active"}>
						Sign up
					</Link>
				</div>
				<div
					className="auth__inputs"
					style={{
						display: isProceed ? "flex" : "none",
					}}
				>
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
						required={true}
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
				<div
					className="auth__inputs"
					style={{
						display: isProceed ? "none" : "flex",
					}}
				>
					<Input
						type={"text"}
						placeholder={"First name"}
						icon={"/assets/icons/auth/user.svg"}
						required={true}
						ref={usernameRef}
					/>
					<Input
						type={"text"}
						placeholder={"Last name"}
						icon={"/assets/icons/auth/user.svg"}
						required={true}
						ref={usernameRef}
					/>
					<Input
						type={"text"}
						placeholder={"Country"}
						icon={"/assets/icons/auth/user.svg"}
						required={true}
						value={countryInput}
						onChange={(event) => {
							setCountryInput(event.target.value);
						}}
					/>

					<div className="auth__select">
						{countries
							.filter((value) => {
								if (value.name.toLowerCase().includes(countryInput.toLowerCase())) return value;
							})
							.map((value) => {
								return (
									<div
										className={"auth__select-option"}
										key={value.name}
										onClick={(event) => {
											if (countryInput === event.currentTarget.textContent) return;
											event.currentTarget.classList.toggle("active");
											setCountry(value.name);
											setCountryInput(value.name);
										}}
									>
										<p>{value.name}</p>
										<Image
											src={value.flag}
											alt={value.name}
											width={48}
											height={32}
											loading={"lazy"}
											draggable={false}
										/>
									</div>
								);
							})}
					</div>
					{/*<div name="countries" id="countries">*/}
					{/*	{countries.map((country) => {*/}
					{/*		return (*/}
					{/*			<>*/}
					{/*				/!*<option value={country.name} key={country.name}>*!/*/}
					{/*				/!*	{country.name}*!/*/}
					{/*				/!*</option>*!/*/}
					{/*				<img*/}
					{/*					src={country.flag}*/}
					{/*					alt={country.name}*/}
					{/*					width={24}*/}
					{/*					height={24}*/}
					{/*					loading={"lazy"}*/}
					{/*					draggable={false}*/}
					{/*				/>*/}
					{/*			</>*/}
					{/*		);*/}
					{/*	})}*/}
					{/*</div>*/}
					<Input
						type={"text"}
						placeholder={"School name"}
						icon={"/assets/icons/auth/mail.svg"}
						required={true}
						ref={emailRef}
					/>
				</div>
				<button
					className="auth__submit"
					type={isProceed ? "button" : "submit"}
					onClick={() => {
						if (isProceed) setIsProceed(false);
					}}
				>
					{isProceed ? "Proceed" : "Sign up"}
				</button>
				<button
					className="auth__back"
					style={{
						display: isProceed ? "none" : "flex",
					}}
					onClick={() => {
						setIsProceed(true);
					}}
				>
					Back
				</button>
			</form>
		</div>
	);
}
