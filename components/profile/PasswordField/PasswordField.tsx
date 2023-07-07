import { InputField } from "@/components";

const PasswordField = () => {
	return (
		<div className="flex w-full gap-5 mt-3">
			<div className="w-full">
				<InputField
					type="password"
					label="Password"
					placeholder="••••••••••••"
					readOnly="true"
				/>
			</div>
			<button className="text-xl ">Edit</button>
		</div>
	);
};

export default PasswordField;
