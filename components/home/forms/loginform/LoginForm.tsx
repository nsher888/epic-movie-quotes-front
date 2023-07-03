import { Button, InputField, FormHeader } from "@/components";
import useLoginForm from "./useLoginForm";
import { Input } from "postcss";

const LoginForm = () => {
	const { register, errors, handleSubmit, onSubmit, switchToForm } =
		useLoginForm();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormHeader
				title="Log In to your account"
				subtitle="Welcome back! Please, Enter your Details"
			/>
			<InputField
				label="Email"
				id="email"
				type="email"
				name="email"
				placeholder="Enter your email"
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
				label="Password"
				id="password"
				type="password"
				name="password"
				placeholder="Enter your password"
				error={errors.password}
				register={register("password", {
					required: "Please provide a valid value.",
				})}
			/>

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
					className="text-blue-500 underline cursor-pointer"
					onClick={() => switchToForm("signup")}>
					Sign Up
				</a>
			</p>
		</form>
	);
};

export default LoginForm;