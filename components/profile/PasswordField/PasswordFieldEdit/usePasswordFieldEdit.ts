import { setNewPassword } from "@/stores/slices/newPasswordSlice";
import { PasswordEditFormTypes } from "@/types/FormTypes";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const usePasswordFieldEdit = () => {
	const { register, formState, getValues } = useForm<PasswordEditFormTypes>({
		mode: "all",
	});

	const { errors } = formState;

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
	};
};

export default usePasswordFieldEdit;
