import { getCSRFToken } from "@/services/session/getCSRFToken";
import { forgotPassword } from "@/services/session/passwordReset";
import { showModal } from "@/stores/slices/modalSlice";
import { ForgotPasswordFormTypes } from "@/types/FormTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
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
			await getCSRFToken();
			await forgotPassword(data);
			dispath(showModal("EmailSuccessfull"));
		} catch (error) {
			console.error(error);
		}
	};

	const { t } = useTranslation("landing");

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
		t,
	};
};

export default useForgotPassword;
