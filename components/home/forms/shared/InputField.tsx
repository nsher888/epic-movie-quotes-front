import { InputFieldTypes } from "@/types/FormTypes";

const InputField: React.FC<InputFieldTypes> = ({
	label,
	type,
	id,
	placeholder,
	errors,
	register,
}) => {
	return (
		<div className="relative flex flex-col gap-2 mb-8">
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				className={`px-3 py-2 text-gray-600 bg-gray-300 rounded outline-none ${
					errors ? "border-red-500" : ""
				}`}
				{...register}
			/>

			{errors && (
				<p className="absolute text-xs text-red-500 -bottom-6 left-3">
					{errors.message}
				</p>
			)}
		</div>
	);
};

export default InputField;
