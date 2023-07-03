import instance from "../axios";

export const getCSRFToken = async () => {
	const response = await instance.get("/sanctum/csrf-cookie");
	return response;
};
