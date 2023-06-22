import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	className: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
}

export default ButtonProps;
