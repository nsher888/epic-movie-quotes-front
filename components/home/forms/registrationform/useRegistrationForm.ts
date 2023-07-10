import { RegistrationFormTypes } from "@/types/FormTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { showModal } from "@/stores";
import { registerUser, getCSRFToken } from "@/services";
import { useTranslation } from "next-i18next";

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
			dispatch(showModal("EmailSuccessfull"));
		} catch (error) {
			console.error(error);
		}
	};

	const dispatch = useDispatch();

	const switchToForm = (formName: string) => {
		dispatch(showModal(formName));
	};

	const { t } = useTranslation("landing");

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
		getValues,
		switchToForm,
		t,
	};
};

export default useRegistrationForm;
