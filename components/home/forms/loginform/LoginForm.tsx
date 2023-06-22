import { Button } from "@/components/button";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
	const { register, errors, handleSubmit, onSubmit, switchToForm } =
		useLoginForm();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-6 text-center">
				<h2 className="mb-3 text-3xl">Log In to your account</h2>
				<p className="text-gray-600">
					Welcome back! Please, Enter your Details
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
						minLength: {
							value: 3,
							message: "Please provide a valid value.",
						},
						required: "Please provide a valid value.",
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
					placeholder="Enter your password"
					className={`px-3 py-2 text-gray-600 bg-gray-300 rounded outline-none ${
						errors.password ? "border-red-500" : ""
					}`}
					{...register("password", {
						required: "Please provide a valid value.",
					})}
				/>

				<p className="absolute text-xs text-red-500 -bottom-6 left-3">
					{errors.password?.message}
				</p>
			</div>

			<div className="flex justify-between mb-4">
				<div className="flex items-center gap-2">
					<input type="checkbox" name="remember" id="remember" />
					<label htmlFor="remember">Remember me</label>
				</div>

				<a href="#" className="text-blue-500 underline">
					Forgot password?
				</a>
			</div>

			<Button type="submit" className="w-full mb-4 bg-red-600">
				Sign In
			</Button>
			<Button className="w-full border border-white">
				Sign in with Google{" "}
			</Button>

			<p className="mt-4 text-center">
				Do not have an account?{" "}
				<a
					href="#"
					className="text-blue-500 underline"
					onClick={() => switchToForm("signup")}>
					Sign Up
				</a>
			</p>
		</form>
	);
};

export default LoginForm;
