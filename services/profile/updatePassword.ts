import instance from "../axios";

export const updatePassword = async (data: {
	password: string;
	confirm_password: string;
}) => {
	const response = await instance.put("api/users/password", data);
	return response;
};
