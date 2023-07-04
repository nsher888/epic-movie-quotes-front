import { Button, InputField, FormHeader } from "@/components";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
	const {
		register,
		errors,
		handleSubmit,
		onSubmit,
		switchToForm,
		backendErrorMessage,
		t,
	} = useLoginForm();

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="max-w-xs">
			<FormHeader
				title={t("logInText")}
				subtitle={t("loginInSubtitle")}
			/>
			<InputField
				label={t("email")}
				id="email"
				type="text"
				name="email"
				placeholder={t("enterEmail")}
				error={errors.email}
				register={register("email", {
					minLength: {
						value: 3,
						message: "Please provide a valid value.",
					},
					required: "Please provide a valid value.",
				})}
			/>

			<InputField
				label={t("password")}
				id="password"
				type="password"
				name="password"
				placeholder={t("enterPassword")}
				error={errors.password}
				register={register("password", {
					required: "Please provide a valid value.",
				})}
			/>

			<div className="flex justify-between mb-4">
				<div className="flex items-center gap-2">
					<input type="checkbox" name="remember" id="remember" />
					<label htmlFor="remember">{t("rememberMe")}</label>
				</div>

				<a
					className="text-blue-500 underline cursor-pointer"
					onClick={() => switchToForm("forgotPassword")}>
					{t("forgotPassword")}
				</a>
			</div>

			{backendErrorMessage && (
				<p className="mb-4 text-red-500">{backendErrorMessage}</p>
			)}

			<Button type="submit" className="w-full mb-4 bg-red-600">
				{t("logIn")}
			</Button>
			<a href="http://localhost:8000/api/auth/google/redirect">
				{t("signUpWithGoogle")}
			</a>

			<p className="mt-4 text-center">
				{t("doNotHaveAnAccount")} &nbsp;
				<a
					className="text-blue-500 underline cursor-pointer"
					onClick={() => switchToForm("signup")}>
					{t("signUp")}
				</a>
			</p>
		</form>
	);
};

export default LoginForm;
