import instance from "../axios";

export const googleLogin = async () => {
	await instance.get("api/auth/google/redirect");
};

export const googleLoginCallback = async (data: any) => {
	await instance.post("api/auth/google/login", data);
};
