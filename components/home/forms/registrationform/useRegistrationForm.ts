import { RegistrationFormTypes } from "@/types/FormTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { showModal } from "@/stores/slices/modalSlice";
import { registerUser } from "@/services/session/registerUser";
import { getCSRFToken } from "@/services/session/getCSRFToken";

const useRegistrationForm = () => {
	const { register, formState, handleSubmit, getValues } =
		useForm<RegistrationFormTypes>({
			mode: "all",
		});

	const { errors } = formState;

	const onSubmit: SubmitHandler<RegistrationFormTypes> = async (data) => {
		try {
			await getCSRFToken();
			await registerUser(data);
		} catch (error) {
			console.log(error);
		}
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
