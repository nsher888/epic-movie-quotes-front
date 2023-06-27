import { getCSRFToken } from "@/services/session/getCSRFToken";
import { showModal } from "@/stores/slices/modalSlice";
import { ResetPasswordFormTypes } from "@/types/FormTypes";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ResetPassword from "./ResetPassword";
import { resetPassword } from "@/services/session/passwordReset";

const useResetPassword = () => {
	const { register, formState, handleSubmit, getValues } =
		useForm<ResetPasswordFormTypes>({
			mode: "all",
		});
	const [email, setEmail] = useState("");
	const [token, setToken] = useState("");

	const { errors } = formState;
	const dispath = useDispatch();

	const router = useRouter();

	useEffect(() => {
		const { email, token } = router.query;
		setEmail(email as string);
		setToken(token as string);
		router.replace("/");
	}, []);

	const onSubmit = async (data: ResetPasswordFormTypes) => {
		try {
			data["token"] = token;
			data["email"] = email;
			await getCSRFToken();
			console.log(data);
			await resetPassword(data);
			dispath(showModal("ChangeSuccessfull"));
		} catch (error) {
			console.log(error);
		}
	};

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
		getValues,
	};
};

export default useResetPassword;
