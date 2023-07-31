import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import Image from "next/image";

import "./styles/input.scss";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	icon?: string;
	className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return (
		<div className={props.className ?? "input"} style={props.style}>
			<input className={props.className ?? "input__field"} {...props} ref={ref} />
			{props.icon && (
				<div className={props.className ?? "input__field-icon"}>
					<Image src={props.icon} alt={"icon"} width={24} height={24} draggable={false} />
				</div>
			)}
		</div>
	);
});

export default Input;
