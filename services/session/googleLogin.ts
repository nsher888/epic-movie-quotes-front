import instance from "../axios";
import { getCSRFToken } from "./getCSRFToken";

export const googleLogin = async () => {
	await instance.get("/auth/google/redirect");
};

export const googleLoginCallback = async () => {
	await instance.get("/auth/google/callback");
};
