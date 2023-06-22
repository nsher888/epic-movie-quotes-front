import { RegistrationFormTypes } from "@/types/FormTypes";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { showModal } from "@/stores/slices/modalSlice";

const useRegistrationForm = () => {
	const { register, formState, handleSubmit, getValues } =
		useForm<RegistrationFormTypes>({
			mode: "all",
		});

	const { errors } = formState;

	const onSubmit = (data: RegistrationFormTypes) => {
		console.log(data);
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
		getValues,
		switchToForm,
	};
};

export default useRegistrationForm;
