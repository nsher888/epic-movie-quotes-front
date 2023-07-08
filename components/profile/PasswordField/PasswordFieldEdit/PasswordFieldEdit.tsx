import { EditInputField, InputField, PasswordIcon } from "@/components";
import usePasswordFieldEdit from "./usePasswordFieldEdit";

const PasswordFieldEdit = () => {
	const {
		register,
		errors,
		getValues,
		handleNewPasswordChange,
		isLengthValid,
		isLowercaseValid,
	} = usePasswordFieldEdit();
	return (
		<div className="max-w-[546px]">
			<div className="p-6 mb-8 border border-gray-500 rounded">
				<p>Password Should Contain</p>
				<div className="flex items-center gap-2 mt-4 mb-1 text-sm">
					<PasswordIcon
						color={isLengthValid ? "#198754" : "#9C9A9A"}
					/>
					<p
						className={
							isLengthValid ? "text-white" : "text-neutral-400"
						}>
						8 or more characters
					</p>
				</div>
				<div className="flex items-center gap-2 text-sm">
					<PasswordIcon
						color={isLowercaseValid ? "#198754" : "#9C9A9A"}
					/>
					<p
						className={
							isLowercaseValid ? "text-white" : "text-neutral-400"
						}>
						15 lowercase characters
					</p>
				</div>
			</div>
			<EditInputField
				label="New password"
				id="password"
				name="password"
				type="password"
				placeholder="At least 8 & max. 15 lowercase characters"
				error={errors.password}
				register={register("password", {
					required: "Please provide a valid value.",
					pattern: {
						value: /^[a-z0-9]+$/,
						message:
							"Please use only lowercase Latin letters and numbers.",
					},
					minLength: {
						value: 8,
						message: "Minimum 8 characters required",
					},
					maxLength: {
						value: 15,
						message: "Maximum 15 characters allowed",
					},
				})}
				onChange={handleNewPasswordChange}
			/>
			<InputField
				label="Confirm new password"
				id="confirm_password"
				name="confirm_password"
				type="password"
				placeholder="Repeat your password"
				error={errors.confirm_password}
				register={register("confirm_password", {
					required: "Please provide a valid value.",
					validate: (value) =>
						value === getValues("password") ||
						"Passwords do not match.",
				})}
			/>
		</div>
	);
};

export default PasswordFieldEdit;
