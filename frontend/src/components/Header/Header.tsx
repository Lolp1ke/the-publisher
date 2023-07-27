"use client";
import Link from "next/link";
import { useState } from "react";

import "./styles/header.scss";

import Navbar from "@components/Navbar/Navbar";

import Burger from "@ui/Burger/Burger";
import Image from "next/image";

export default function Header() {
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
									fill={true}
									draggable={false}
								/>
							</a>
							<a href="https://facebook.com/" className="header__link">
								<Image
									src="/assets/icons/social/facebook.svg"
									alt="facebook"
									fill={true}
									draggable={false}
								/>
							</a>
							<a href="https://twitter.com/" className="header__link">
								<Image
									src="/assets/icons/social/twitter.svg"
									alt="twitter"
									fill={true}
									draggable={false}
								/>
							</a>
							<a href="https://linkedin.com/" className="header__link">
								<Image
									src="/assets/icons/social/linked-in.svg"
									alt="linked-in"
									fill={true}
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
					<div className="header__profile">
						<Link href={"/auth"} className="header__profile-icon">
							<img src="/assets/icons/user.svg" alt="user" draggable={false} />
						</Link>
					</div>
				</div>
				<Navbar />
			</div>
		</header>
	);
}
