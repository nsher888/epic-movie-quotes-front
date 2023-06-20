import { ButtonProps } from "@/types";

const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button className={`px-7 py-2 rounded ${className}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
