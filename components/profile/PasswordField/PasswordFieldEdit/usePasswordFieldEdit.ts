import { setNewPassword } from "@/stores";
import { PasswordEditFormTypes } from "@/types/FormTypes";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const usePasswordFieldEdit = () => {
	const { register, formState, getValues, watch } =
		useForm<PasswordEditFormTypes>({
			mode: "all",
		});

	const { errors } = formState;
	const password = watch("password");

	const isLengthValid = password && password.length >= 8;
	const isLowercaseValid = password && /^[a-z]+$/.test(password);

	const dispatch = useDispatch();

	const handleNewPasswordChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const newPassword = event.target.value;
		dispatch(
			setNewPassword({
				password: newPassword,
				confirm_password: newPassword,
			})
		);
	};

	return {
		register,
		getValues,
		errors,
		handleNewPasswordChange,
		isLengthValid,
		isLowercaseValid,
	};
};

export default usePasswordFieldEdit;
