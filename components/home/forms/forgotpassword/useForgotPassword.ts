import { ForgotPasswordFormTypes } from "@/types/FormTypes";
import { useForm } from "react-hook-form";

const useForgotPassword = () => {
	const { register, formState, handleSubmit } =
		useForm<ForgotPasswordFormTypes>({
			mode: "all",
		});

	const { errors } = formState;

	const onSubmit = (data: ForgotPasswordFormTypes) => {
		console.log(data);
	};

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
	};
};

export default useForgotPassword;
