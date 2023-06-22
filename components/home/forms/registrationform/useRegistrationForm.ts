import { LoginFormTypes, RegistrationFormTypes } from "@/types/FormTypes";
import { useForm } from "react-hook-form";

const useRegistrationForm = () => {
	const { register, formState, handleSubmit, getValues } =
		useForm<RegistrationFormTypes>({
			mode: "all",
		});

	const { errors } = formState;

	const onSubmit = (data: RegistrationFormTypes) => {
		console.log(data);
	};

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
		getValues,
	};
};

export default useRegistrationForm;
