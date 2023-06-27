import instance from "../axios";

export const logOutUser = async () => {
	const response = await instance.post("/api/logout");
	return response;
};
