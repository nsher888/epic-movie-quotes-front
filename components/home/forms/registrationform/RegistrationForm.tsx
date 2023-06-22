import { Button } from "@/components/button";
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
			<div className="mb-6 text-center">
				<h2 className="mb-3 text-3xl">Create an account</h2>
				<p className="text-gray-600">Start your journey!</p>
			</div>
			<div className="relative flex flex-col gap-2 mb-8">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					placeholder="At least 3 & max.15 lower case characters"
					className={`px-3 py-2 text-gray-600 bg-gray-300 rounded outline-none ${
						errors.name ? "border-red-500 border" : ""
					}`}
					{...register("name", {
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
				<p className="absolute text-xs text-red-500 -bottom-6 left-3">
					{errors.name?.message}
				</p>
			</div>

			<div className="relative flex flex-col gap-2 mb-8">
				<label htmlFor="email">Email</label>
				<input
					type="text"
					id="email"
					placeholder="Enter your email"
					className={`px-3 py-2 text-gray-600 bg-gray-300 rounded outline-none ${
						errors.email ? "border-red-500 border" : ""
					}`}
					{...register("email", {
						required: "Please provide a valid value.",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "Please enter a valid email address.",
						},
					})}
				/>
				<p className="absolute text-xs text-red-500 -bottom-6 left-3">
					{errors.email?.message}
				</p>
			</div>

			<div className="relative flex flex-col gap-2 mb-8">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					placeholder="At least 3 & max.15 lower case characters"
					className={`px-3 py-2 text-gray-600 bg-gray-300 rounded outline-none ${
						errors.password ? "border-red-500" : ""
					}`}
					{...register("password", {
						required: "Please provide a valid value.",
						pattern: {
							value: /^[a-z0-9]+$/,
							message:
								"Please use only lowercase Latin letters and numbers.",
						},
					})}
				/>
				<p className="absolute text-xs text-red-500 -bottom-6 left-3">
					{errors.password?.message}
				</p>
			</div>

			<div className="relative flex flex-col gap-2 mb-8">
				<label htmlFor="confirm_password">Confirm Password</label>
				<input
					type="password"
					id="confirm_password"
					placeholder="Repeat your password"
					className={`px-3 py-2 text-gray-600 bg-gray-300 rounded outline-none ${
						errors.confirm_password ? "border-red-500" : ""
					}`}
					{...register("confirm_password", {
						required: "Please provide a valid value.",
						validate: (value) =>
							value === getValues("password") ||
							"Passwords do not match.",
					})}
				/>

				<p className="absolute text-xs text-red-500 -bottom-6 left-3">
					{errors.confirm_password?.message}
				</p>
			</div>

			<Button type="submit" className="w-full mb-4 bg-red-600">
				Sign In
			</Button>
			<Button className="w-full border border-white">
				Sign up with Google{" "}
			</Button>

			<p className="mt-4 text-center">
				Already have an account?{" "}
				<a
					href="#"
					className="text-blue-500 underline"
					onClick={() => switchToForm("login")}>
					Log In
				</a>
			</p>
		</form>
	);
};

export default LoginForm;
