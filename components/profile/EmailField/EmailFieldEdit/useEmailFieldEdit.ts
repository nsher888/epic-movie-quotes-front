import { setNewEmail } from "@/stores";
import { EmailEditFormTypes } from "@/types/FormTypes";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";

const useUsernameFieldEdit = () => {
	const { register, formState, handleSubmit, getValues } =
		useForm<EmailEditFormTypes>({
			mode: "all",
		});

	const { errors } = formState;
	const dispatch = useDispatch();

	const handleNewEmailChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatch(setNewEmail(event.target.value));
	};

	const { t } = useTranslation("profile");

	return {
		register,
		formState,
		handleSubmit,
		getValues,
		errors,
		dispatch,
		handleNewEmailChange,
		t,
	};
};

export default useUsernameFieldEdit;
