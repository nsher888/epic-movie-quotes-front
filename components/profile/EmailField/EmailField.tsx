import { InputField } from "@/components";
import useEmailField from "./useEmailField";
import EmailFieldEdit from "./EmailFieldEdit/EmailFieldEdit";

const EmailField = () => {
	const { user, handleEditClick, isEmailEditing } = useEmailField();

	return (
		<div className="flex flex-col w-full">
			<div className="flex w-full gap-5 mt-3">
				<div className="w-full">
					<InputField
						label="Email"
						placeholder={user.email}
						readOnly="true"
					/>
				</div>
				<button onClick={handleEditClick} className="text-xl ">
					Edit
				</button>
			</div>

			{isEmailEditing && <EmailFieldEdit />}
		</div>
	);
};

export default EmailField;
