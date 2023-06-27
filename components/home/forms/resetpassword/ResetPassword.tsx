import { Button } from "@/components/button";
import { FormHeader, InputField } from "../shared";
import useResetPassword from "./useResetPassword";
import { BackArrow } from "@/components";

const ResetPassword = () => {
	const { register, errors, handleSubmit, onSubmit, getValues } =
		useResetPassword();
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="max-w-sm">
			<FormHeader
				title="Create new password"
				subtitle="Your new password must be different from 
                previous used passwords"
			/>
			<InputField
				label="Password"
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
			/>
			<InputField
				label="Confirm Password"
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

			<Button type="submit" className="w-full mb-4 bg-red-600">
				Reset password
			</Button>

			<div className="flex items-center justify-center gap-5 mt-8">
				<BackArrow />
				<p className="text-gray-500">Back to log in</p>
			</div>
		</form>
	);
};
export default ResetPassword;
