import { showModal } from "@/stores/slices/modalSlice";
import { ResetPasswordFormTypes } from "@/types/FormTypes";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const useResetPassword = () => {
	const { register, formState, handleSubmit, getValues } =
		useForm<ResetPasswordFormTypes>({
			mode: "all",
		});

	const { errors } = formState;
	const dispath = useDispatch();

	const onSubmit = (data: ResetPasswordFormTypes) => {
		console.log(data);
		dispath(showModal("ChangeSuccessfull"));
	};

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
		getValues,
	};
};

export default useResetPassword;
