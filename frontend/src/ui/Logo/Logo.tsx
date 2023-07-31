import Link from "next/link";

import "./styles/logo.scss";

interface LogoProps {
	showLocation?: Boolean;
}

export default function Logo({ showLocation = true }: LogoProps) {
	return (
		<div className="logo">
			<Link href={"/"} className="logo__title">
				<span className="logo__title-sub">The</span> <span className="logo__title-main">Publisher</span>
			</Link>
			<p className="logo__sub-title" style={{ display: showLocation ? "flex" : "none" }}>
				Astana, Kazakhstan * Vol.I
			</p>
		</div>
	);
}
