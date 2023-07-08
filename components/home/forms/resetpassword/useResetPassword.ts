import { getCSRFToken, resetPassword } from "@/services";
import { showModal } from "@/stores";
import { ResetPasswordFormTypes } from "@/types/FormTypes";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

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
	}, [router]);

	const onSubmit = async (data: ResetPasswordFormTypes) => {
		try {
			data["token"] = token;
			data["email"] = email;
			await getCSRFToken();
			await resetPassword(data);
			dispath(showModal("ChangeSuccessfull"));
		} catch (error) {
			console.error(error);
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
