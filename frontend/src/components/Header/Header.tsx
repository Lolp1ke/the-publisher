"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import "./styles/header.scss";

import Navbar from "@components/Navbar/Navbar";

import Burger from "@ui/Burger/Burger";

import { TUser } from "@hooks/user/types";

interface HeaderProps {
	user: TUser | null;
}

export default function Header({ user }: HeaderProps) {
	const [showBurger, setShowBurger] = useState<boolean>(false);

	return (
		<header className="header">
			<div className="header__container">
				<div className="header__main">
					<div className="header__info">
						<Burger isVisible={showBurger} setIsVisible={setShowBurger} />
						<p className="header__date">
							<time>
								{new Date().toLocaleString("en-EN", {
									month: "long",
									day: "2-digit",
									year: "numeric",
									weekday: "long",
									hour: "numeric",
									minute: "numeric",
									timeZone: "Asia/Almaty",
								})}
							</time>
						</p>
						<div className="header__social">
							<a href="https://instagram.com/" className="header__link">
								<Image
									src="/assets/icons/social/instagram.svg"
									alt="instagram"
									width={24}
									height={24}
									draggable={false}
								/>
							</a>
							<a href="https://facebook.com/" className="header__link">
								<Image
									src="/assets/icons/social/facebook.svg"
									alt="facebook"
									width={24}
									height={24}
									draggable={false}
								/>
							</a>
							<a href="https://twitter.com/" className="header__link">
								<Image
									src="/assets/icons/social/twitter.svg"
									alt="twitter"
									width={24}
									height={24}
									draggable={false}
								/>
							</a>
							<a href="https://linkedin.com/" className="header__link">
								<Image
									src="/assets/icons/social/linked-in.svg"
									alt="linked-in"
									width={24}
									height={24}
									draggable={false}
								/>
							</a>
						</div>
					</div>
					<div className="header__center">
						<Link href={"/"} className="header__title">
							<span className="header__title-sub">The</span>{" "}
							<span className="header__title-main">Publisher</span>
						</Link>
						<p className="header__sub-title">Astana, Kazakhstan * Vol.I</p>
					</div>
					<Link href={user ? "/profile" : "/auth"} className="header__profile">
						<p className="header__profile-name">
							{user?.lastName} {user?.firstName}
						</p>
						<Image
							src={user?.profilePictureURL ?? "/assets/icons/user.svg"}
							alt="user"
							className="header__profile-icon"
							width={24}
							height={24}
							draggable={false}
						/>
					</Link>
				</div>
				<Navbar />
			</div>
		</header>
	);
}
