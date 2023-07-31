import Link from "next/link";
import Image from "next/image";

import "./styles/navbar.scss";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar__list">
				<Link href={"/"} className="navbar__link">
					Home
				</Link>
				<Link href={"/"} className="navbar__link">
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
			<div className="navbar__search">
				{/*<input type="text" className="navbar__search-field" />*/}
				<button className="navbar__search-button" type={"button"}>
					<Image src="/assets/icons/search.svg" alt="search" width={24} height={24} draggable={false} />
				</button>
			</div>
		</nav>
	);
}
