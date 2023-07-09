import { RootState } from "@/stores/store";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/stores";
import { getUserData, updateAvatar } from "@/services";
import { useState } from "react";

const useUserAvatar = () => {
	const user = useSelector((state: RootState) => state.user.user);

	const [selectedFile, setSelectedFile] = useState(null);
	const dispatch = useDispatch();

	const handleFileChangeAndUpload = async (event: any) => {
		const file = event.target.files[0];
		setSelectedFile(file);

		if (file) {
			try {
				await updateAvatar(file);
				const user = await getUserData();
				dispatch(setUser(user.data));
			} catch (error) {
				console.error(error);
			}
		}
	};

	return {
		user,
		handleFileChangeAndUpload,
	};
};

export default useUserAvatar;
