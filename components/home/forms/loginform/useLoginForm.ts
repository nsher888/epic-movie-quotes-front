import { LoginFormTypes } from "@/types/FormTypes";
import { useForm } from "react-hook-form";

const useLoginForm = () => {
	const { register, formState, handleSubmit } = useForm<LoginFormTypes>({
		mode: "all",
	});

	const { errors } = formState;

	const onSubmit = (data: LoginFormTypes) => {
		console.log(data);
	};

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
	};
};

export default useLoginForm;
