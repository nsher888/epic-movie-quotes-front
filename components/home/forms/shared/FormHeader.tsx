import { FormHeaderTypes } from "@/types/FormTypes";

const FormHeader: React.FC<FormHeaderTypes> = ({ title, subtitle }) => {
	return (
		<div className="mb-6 text-center">
			<h2 className="mb-3 text-3xl">{title}</h2>
			<p className="text-gray-600">{subtitle}</p>
		</div>
	);
};

export default FormHeader;
