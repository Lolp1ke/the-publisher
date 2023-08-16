"use client";
import { useState } from "react";

import "./styles/burger.scss";

export default function Burger() {
	const [showBurger, setShowBurger] = useState<boolean>(false);

	return (
		<button
			className={"burger" + " " + (showBurger ? "active" : "")}
			onClick={() => {
				setShowBurger((prevState) => !prevState);
			}}
			type={"button"}
			title={"menu"}
		>
			<span />
			<span />
			<span />
		</button>
	);
}
