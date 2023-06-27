import { getCSRFToken } from "@/services/session/getCSRFToken";
import { forgotPassword } from "@/services/session/passwordReset";
import { showModal } from "@/stores/slices/modalSlice";
import { ForgotPasswordFormTypes } from "@/types/FormTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const useForgotPassword = () => {
	const { register, formState, handleSubmit } =
		useForm<ForgotPasswordFormTypes>({
			mode: "all",
		});

	const { errors } = formState;
	const dispath = useDispatch();

	const onSubmit: SubmitHandler<ForgotPasswordFormTypes> = async (data) => {
		try {
			console.log(data);
			await getCSRFToken();
			await forgotPassword(data);
			dispath(showModal("EmailSuccessfull"));
		} catch (error) {
			console.log(error);
		}
	};

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
	};
};

export default useForgotPassword;
