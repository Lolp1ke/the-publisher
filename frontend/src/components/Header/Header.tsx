import Link from "next/link";
import Image from "next/image";

import Navbar from "@components/Navbar/Navbar";

import Logo from "@ui/Logo/Logo";

import type { TUser } from "@hooks/user/types";

import "./styles/header.scss";

interface HeaderProps {
	user: TUser | null;
}

export default function Header({ user }: HeaderProps) {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__main">
					<div className="header__info">
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
					<Logo />
					<Link href={user ? "/profile" : "/auth/sign-in"} className="header__profile">
						<p className="header__profile-name">{user?.username}</p>
						<Image
							src={user?.profilePictureURL ?? "/assets/icons/user.svg"}
							alt="user"
							className="header__profile-icon"
							width={42}
							height={42}
							draggable={false}
						/>
					</Link>
				</div>
				<Navbar />
			</div>
		</header>
	);
}
