import instance from "../axios";

export const getUserMovies = async () => {
	const reponse = await instance.get("api/user/movies");
	return reponse;
};

export const getUserMovie = async (id: any) => {
	const reponse = await instance.get(`api/user/movies/${id}`);
	return reponse;
};

export const storeUserMovie = async (data: any) => {
	const response = await instance.post("api/user/movies", data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response;
};

export const deleteUserMovie = async (id: any) => {
	const response = await instance.delete(`api/user/movies/${id}`);
	return response;
};

export const updateUserMovie = async (data: any) => {
	const response = await instance.put(`api/user/movies/${data.id}`, data);
	return response;
};
