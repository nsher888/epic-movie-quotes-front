import { UsernameEditFormTypes } from "@/types/FormTypes";
import { useForm } from "react-hook-form";

const useUsernameFieldEdit = () => {
	const { register, formState, handleSubmit, getValues } =
		useForm<UsernameEditFormTypes>({
			mode: "all",
		});

	const { errors } = formState;

	return {
		register,
		formState,
		handleSubmit,
		getValues,
		errors,
	};
};

export default useUsernameFieldEdit;
