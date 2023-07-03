import { RegistrationFormTypes } from "@/types/FormTypes";
import instance from "../axios";

export const registerUser = async (data: RegistrationFormTypes) => {
	const response = await instance.post("/api/register", data);
	return response;
};
