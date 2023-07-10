import { InputField, PasswordFieldEdit } from "@/components";
import usePasswordField from "./usePasswordField";

const PasswordField = () => {
	const { handleEditClick, isPasswordEditing, t } = usePasswordField();

	return (
		<div className="flex flex-col w-full">
			<div className="flex w-full gap-5 mt-3">
				<div className="w-full">
					<InputField
						type="password"
						label={t("password")}
						placeholder="••••••••••••"
						readOnly="true"
					/>
				</div>
				<button onClick={handleEditClick} className="text-xl ">
					{t("edit")}
				</button>
			</div>

			{isPasswordEditing && <PasswordFieldEdit />}
		</div>
	);
};

export default PasswordField;
