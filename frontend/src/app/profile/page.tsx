import Image from "next/image";

import { useUser } from "@hooks/user/useUser";

import Navbar from "@components/Navbar/Navbar";

import { MainConfig } from "@config/main";

import "./_styles/profile.scss";

export default async function page() {
	const { user } = await useUser();
	console.log(user);

	return (
		<section className="profile">
			<Navbar />
			<div className="profile__container">
				<div className="profile__user">
					<Image
						src={
							user?.profilePictureURL
								? `${MainConfig.STORAGE_ENTRY_POINT}/${user.profilePictureURL}`
								: "/assets/icons/user.svg"
						}
						alt={"user"}
						className="profile__user-image"
						width={200}
						height={200}
						draggable={false}
					/>
					<div className="profile__user-info">
						<h2 className="profile__user-name">
							{user?.firstName} {user?.lastName}
						</h2>
						<p className="profile__user-tag">{user?.username}</p>
						<p className="profile__user-about">
							{user?.bio} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi
							expedita facilis hic ipsum iste molestias nihil nostrum optio quas, qui quia recusandae
							repellat reprehenderit soluta suscipit temporibus vero, voluptate.
						</p>
						<p className="profile__user-type">Reader / {}</p>
					</div>
					<div className="profile__about">
						<h2 className="profile__about-title">About me</h2>
						<ul className="profile__about-list">
							{user?.country && (
								<li className="profile__about-item">
									<Image
										src={"/assets/icons/profile/location.svg"}
										alt={"icon"}
										width={24}
										height={24}
										draggable={false}
									/>
									<p className="profile__about-text">{user.country}</p>
								</li>
							)}
							{/*{user?.birthDay && (*/}
							{/*	<li className="profile__about-item">*/}
							{/*		<Image*/}
							{/*			src={"/assets/icons/profile/cake.svg"}*/}
							{/*			alt={"icon"}*/}
							{/*			width={24}*/}
							{/*			height={24}*/}
							{/*			draggable={false}*/}
							{/*		/>*/}
							{/*		<p className="profile__about-text">{user.birthDay}</p>*/}
							{/*	</li>*/}
							{/*)}*/}
							{user?.school && (
								<li className="profile__about-item">
									<Image
										src={"/assets/icons/profile/location.svg"}
										alt={"icon"}
										width={24}
										height={24}
										draggable={false}
									/>
									<p className="profile__about-text">{user.school}</p>
								</li>
							)}
							{user?.email && (
								<li className="profile__about-item">
									<Image
										src={"/assets/icons/profile/mail.svg"}
										alt={"icon"}
										width={24}
										height={24}
										draggable={false}
									/>
									<p className="profile__about-text">{user.email}</p>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
