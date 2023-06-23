import { LoginFormTypes } from "@/types/FormTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { showModal } from "@/stores/slices/modalSlice";
import { getCSRFToken } from "@/services/session/getCSRFToken";
import { logInUser } from "@/services/session/logInUser";
import { useState } from "react";

const useLoginForm = () => {
	const { register, formState, handleSubmit } = useForm<LoginFormTypes>({
		mode: "all",
	});

	const { errors } = formState;
	const [backendErrorMessage, setBackendErrorMessage] = useState("");

	const onSubmit: SubmitHandler<LoginFormTypes> = async (data) => {
		try {
			await getCSRFToken();
			await logInUser(data);
		} catch (error: any) {
			const message = error.response.data.message;
			setBackendErrorMessage(message);
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
		switchToForm,
		backendErrorMessage,
	};
};

export default useLoginForm;
