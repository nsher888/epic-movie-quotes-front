import { InputField, PasswordFieldEdit } from "@/components";
import usePasswordField from "./usePasswordField";

const PasswordField = () => {
	const { handleEditClick, isPasswordEditing } = usePasswordField();

	return (
		<div className="flex flex-col w-full">
			<div className="flex w-full gap-5 mt-3">
				<div className="w-full">
					<InputField
						type="password"
						label="Password"
						placeholder="••••••••••••"
						readOnly="true"
					/>
				</div>
				<button onClick={handleEditClick} className="text-xl ">
					Edit
				</button>
			</div>

			{isPasswordEditing && <PasswordFieldEdit />}
		</div>
	);
};

export default PasswordField;
