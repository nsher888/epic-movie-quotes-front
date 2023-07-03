import { LoginFormTypes } from "@/types/FormTypes";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { showModal } from "@/stores/slices/modalSlice";

const useLoginForm = () => {
	const { register, formState, handleSubmit } = useForm<LoginFormTypes>({
		mode: "all",
	});

	const { errors } = formState;

	const onSubmit = (data: LoginFormTypes) => {
		return data;
	};

	const dispatch = useDispatch();

	const switchToForm = (formName: string) => {
		dispatch(showModal(formName));
	};

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
		switchToForm,
	};
};

export default useLoginForm;
