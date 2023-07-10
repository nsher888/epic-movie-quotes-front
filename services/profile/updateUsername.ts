import instance from "../axios";

export const updateUsername = async (name: string) => {
	const response = await instance.put("api/users/name", {
		name,
	});
	return response;
};
