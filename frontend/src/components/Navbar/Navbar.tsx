import Link from "next/link";

import "./styles/navbar.scss";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar__list">
				<Link href={"/"} className="navbar__link">
					Home
				</Link>
				<Link href={"/about"} className="navbar__link">
					About us
				</Link>
				<Link href={""} className="navbar__link">
					Opinion
				</Link>
				<Link href={""} className="navbar__link">
					Education
				</Link>
				<Link href={""} className="navbar__link">
					Inteenrest
				</Link>
				<Link href={""} className="navbar__link">
					Sport
				</Link>
			</div>
			<button className="navbar__search" type={"button"}>
				<Image src="/assets/icons/search.svg" alt="search" fill={true} />
			</button>
		</nav>
	);
}
