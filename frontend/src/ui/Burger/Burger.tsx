import { Dispatch, SetStateAction } from "react";

import "./styles/burger.scss";

interface BurgerProps {
	isVisible: boolean;
	setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export default function Burger({ isVisible, setIsVisible }: BurgerProps) {
	return (
		<button
			className={"burger" + " " + (isVisible ? "active" : "")}
			onClick={() => {
				setIsVisible((prevState) => !prevState);
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
