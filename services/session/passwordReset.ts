import { ForgotPasswordFormTypes } from "@/types/FormTypes";
import instance from "../axios";

export const resetPassword = async (data: any) => {
	const response = await instance.post("/api/reset-password", data);
	return response;
};

export const forgotPassword = async (data: ForgotPasswordFormTypes) => {
	const response = await instance.post("api/forgot-password", data);
	return response;
};
