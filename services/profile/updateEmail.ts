import instance from "../axios";

export const updateEmail = async (email: string) => {
	const response = await instance.post("api/profile/email/change", { email });
	return response;
};
