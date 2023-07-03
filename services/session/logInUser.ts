import { LoginFormTypes } from "@/types/FormTypes";
import instance from "../axios";

export const logInUser = async (data: LoginFormTypes) => {
	const response = await instance.post("/api/login", data);
	return response;
};
