import useForgotPassword from "./useForgotPassword";
import { BackArrow, FormHeader, InputField, Button } from "@/components";

const ForgotPassword = () => {
	const { register, errors, handleSubmit, onSubmit, t } = useForgotPassword();
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="max-w-sm">
			<FormHeader
				title={t("forgotPassword")}
				subtitle={t("forgotPasswordText")}
			/>
			<InputField
				label={t("email")}
				id="email"
				name="email"
				type="text"
				placeholder="Enter your email"
				error={errors.email}
				register={register("email", {
					required: "Please provide a valid value.",
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: "Please enter a valid email address.",
					},
				})}
			/>

			<Button type="submit" className="w-full mb-4 bg-red-600">
				{t("sendInsturctions")}
			</Button>

			<div className="flex items-center justify-center gap-5 mt-8">
				<BackArrow />
				<p className="text-gray-500">{t("backToLogin")}</p>
			</div>
		</form>
	);
};
export default ForgotPassword;
