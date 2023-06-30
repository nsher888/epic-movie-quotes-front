import { Button, FormHeader, InputField } from "@/components";
import useRegistrationForm from "./useRegistrationForm";

const LoginForm = () => {
	const {
		register,
		errors,
		handleSubmit,
		onSubmit,
		getValues,
		switchToForm,
	} = useRegistrationForm();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormHeader
				title="Create an account"
				subtitle="Start your journey!"
			/>

			<InputField
				label="Name"
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
			/>
			<InputField
				label="Email"
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
				Sign up
			</Button>
			<a href="http://localhost:8000/api/auth/google/redirect">
				Sign up with Google
			</a>

			<p className="mt-4 text-center">
				Already have an account?{" "}
				<a
					className="text-blue-500 underline cursor-pointer"
					onClick={() => switchToForm("login")}>
					Log In
				</a>
			</p>
		</form>
	);
};

export default LoginForm;
