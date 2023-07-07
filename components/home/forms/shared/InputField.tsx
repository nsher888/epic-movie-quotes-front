import { InputFieldTypes } from "@/types/FormTypes";

const InputField: React.FC<InputFieldTypes> = ({
	label,
	id,
	name,
	type,
	placeholder,
	error,
	register,
	readOnly,
}) => {
	return (
		<div className="relative flex flex-col gap-2 mb-8">
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				readonly={readOnly}
				name={name}
				placeholder={placeholder}
				className={`px-3 py-2 text-gray-600 bg-gray-300 rounded outline-none ${
					error ? "border-red-500 border" : ""
				}`}
				{...register}
			/>
			{error && (
				<p className="absolute text-xs text-red-500 -bottom-6 left-3">
					{error.message}
				</p>
			)}
		</div>
	);
};

export default InputField;
