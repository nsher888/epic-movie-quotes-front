import { InputField } from "@/components";
import useEmailField from "./useEmailField";

const EmailField = () => {
	const { user } = useEmailField();

	return (
		<div className="flex w-full gap-5 mt-3">
			<div className="w-full">
				<InputField
					label="Email"
					placeholder={user.email}
					readOnly="true"
				/>
			</div>
			<button className="text-xl ">Edit</button>
		</div>
	);
};

export default EmailField;
