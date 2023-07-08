import { InputField, UsernameFieldEdit } from "@/components";
import useUsernameField from "./useUsernameField";

const UsernameField = () => {
	const { user, handleEditClick, isEditing } = useUsernameField();

	return (
		<div className="flex flex-col w-full">
			<div className="flex w-full gap-5 mt-10 ">
				<div className="w-full">
					<InputField
						label="Username"
						placeholder={user.name}
						readOnly="true"
					/>
				</div>
				<button onClick={handleEditClick} className="text-xl ">
					Edit
				</button>
			</div>

			{isEditing && <UsernameFieldEdit />}
		</div>
	);
};

export default UsernameField;
