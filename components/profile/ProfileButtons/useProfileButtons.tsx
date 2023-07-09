import { RootState } from "@/stores/store";
import {
	getUserData,
	logOutUser,
	updatePassword,
	updateUsername,
	updateEmail,
} from "@/services";
import { setUser, showModal } from "@/stores";
import { useContext } from "react";
import { UserContext } from "@/context";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

const useProfileButtons = () => {
	const dispatch = useDispatch();
	const newUsername = useSelector((state: RootState) => state.newUsername);
	const newPassword = useSelector((state: RootState) => state.newPassword);
	const newEmail = useSelector((state: RootState) => state.newEmail);
	const { isEditing, setIsEditing } = useContext(UserContext);
	const { isPasswordEditing, setIsPasswordEditing } = useContext(UserContext);
	const { isEmailEditing, setIsEmailEditing } = useContext(UserContext);

	const handleCancelChanges = () => {
		setIsEditing(false);
		setIsPasswordEditing(false);
		setIsEmailEditing(false);
	};

	const router = useRouter();

	const handleSaveChanges = async () => {
		if (isEditing) {
			await updateUsername(newUsername);
			const user = await getUserData();
			dispatch(setUser(user.data));
			setIsEditing(false);
		}
		if (isPasswordEditing) {
			await updatePassword(newPassword);
			const user = await getUserData();
			dispatch(setUser(user.data));
			setIsPasswordEditing(false);
		}
		if (isEmailEditing) {
			await updateEmail(newEmail);
			logOutUser();
			router.push("/");
			dispatch(showModal("EmailSuccessfull"));
			setIsEmailEditing(false);
		}
	};

	return {
		handleCancelChanges,
		handleSaveChanges,
	};
};

export default useProfileButtons;
