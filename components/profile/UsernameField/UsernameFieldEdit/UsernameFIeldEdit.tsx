import { EditInputField } from "@/components";
import useUsernameFieldEdit from "./useUsernameFieldEdit";

const UsernameFieldEdit = () => {
	const { register, errors, handleNewUsernameChange } =
		useUsernameFieldEdit();

	return (
		<div className="max-w-[546px]">
			<EditInputField
				label="New username"
				id="name"
				name="name"
				type="text"
				placeholder="At least 3 & max. 15 lowercase characters"
				error={errors.name}
				register={register("name", {
					minLength: {
						value: 3,
						message: "Minimum 3 characters required",
					},
					maxLength: {
						value: 15,
						message: "Maximum 15 characters allowed",
					},
					required: "Please provide a valid value.",
					pattern: {
						value: /^[a-z0-9]+$/,
						message:
							"Please use only lowercase Latin letters and numbers.",
					},
				})}
				onChange={handleNewUsernameChange}
			/>
		</div>
	);
};

export default UsernameFieldEdit;
