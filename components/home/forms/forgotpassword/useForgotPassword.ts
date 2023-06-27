import { showModal } from "@/stores/slices/modalSlice";
import { ForgotPasswordFormTypes } from "@/types/FormTypes";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const useForgotPassword = () => {
	const { register, formState, handleSubmit } =
		useForm<ForgotPasswordFormTypes>({
			mode: "all",
		});

	const { errors } = formState;
	const dispath = useDispatch();

	const onSubmit = (data: ForgotPasswordFormTypes) => {
		console.log(data);
		dispath(showModal("EmailSuccessfull"));
	};

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
	};
};

export default useForgotPassword;
