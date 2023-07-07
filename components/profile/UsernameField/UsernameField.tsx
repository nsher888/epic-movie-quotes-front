import { InputField } from "@/components";
import useUsernameField from "./useUsernameField";

const UsernameField = () => {
	const { user } = useUsernameField();

	return (
		<div className="flex w-full gap-5 mt-10">
			<div className="w-full">
				<InputField
					label="Username"
					placeholder={user.name}
					readOnly="true"
				/>
			</div>
			<button className="text-xl ">Edit</button>
		</div>
	);
};

export default UsernameField;
