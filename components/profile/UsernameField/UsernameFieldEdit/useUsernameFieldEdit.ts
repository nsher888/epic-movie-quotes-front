import { UsernameEditFormTypes } from "@/types/FormTypes";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setNewUsername } from "@/stores";
import { useTranslation } from "next-i18next";

const useUsernameFieldEdit = () => {
	const { register, formState, handleSubmit, getValues } =
		useForm<UsernameEditFormTypes>({
			mode: "all",
		});

	const { errors } = formState;
	const dispatch = useDispatch();

	const handleNewUsernameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatch(setNewUsername(event.target.value));
	};

	const { t } = useTranslation("profile");

	return {
		register,
		formState,
		handleSubmit,
		getValues,
		errors,
		dispatch,
		handleNewUsernameChange,
		t,
	};
};

export default useUsernameFieldEdit;
