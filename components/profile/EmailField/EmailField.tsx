import { InputField, EmailFieldEdit } from "@/components";
import useEmailField from "./useEmailField";

const EmailField = () => {
	const { user, handleEditClick, isEmailEditing, t } = useEmailField();

	return (
		<div className="flex flex-col w-full">
			<div className="flex w-full gap-5 mt-3">
				<div className="w-full">
					<InputField
						label={t("email")}
						placeholder={user.email}
						readOnly="true"
					/>
				</div>
				<button onClick={handleEditClick} className="text-xl ">
					{t("edit")}
				</button>
			</div>

			{isEmailEditing && <EmailFieldEdit />}
		</div>
	);
};

export default EmailField;
