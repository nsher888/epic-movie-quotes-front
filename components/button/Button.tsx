import { ButtonProps } from "@/types";

const Button = ({
	children,
	className,
	type,
	onClick,
	...props
}: ButtonProps) => {
	return (
		<button
			className={`px-7 py-2 rounded ${className}`}
			onClick={onClick}
			type={type}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
