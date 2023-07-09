import { EditInputField } from "@/components";
import useEmailFieldEdit from "./useEmailFieldEdit";

const EmailFieldEdit = () => {
	const { register, errors, handleNewEmailChange, t } = useEmailFieldEdit();
	return (
		<div className="max-w-[505px]">
			<EditInputField
				label={t("newEmail")}
				id="email"
				name="email"
				type="text"
				placeholder="At least 3 & max. 15 lowercase characters"
				error={errors.email}
				register={register("email", {
					required: "Please provide a valid value.",
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: "Please enter a valid email address.",
					},
				})}
				onChange={handleNewEmailChange}
			/>
		</div>
	);
};

export default EmailFieldEdit;
