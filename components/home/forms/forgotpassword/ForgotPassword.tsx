import { InputField } from "../shared";
import useForgotPassword from "./useForgotPassword";

const ForgotPassword = () => {
	const { register, errors, handleSubmit, onSubmit } = useForgotPassword();
	return (
		<div className="forgotpassword">
			<h1>Forgot Password</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
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
			</form>
		</div>
	);
};
export default ForgotPassword;
