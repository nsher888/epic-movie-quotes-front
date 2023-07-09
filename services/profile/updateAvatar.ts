import instance from "../axios";

export const updateAvatar = async (avatar: File) => {
	const formData = new FormData();
	formData.append("avatar", avatar);

	const response = await instance.post("api/users/avatar", formData);
	return response;
};
