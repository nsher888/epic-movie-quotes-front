import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components";
import { RootState } from "@/stores/store";
import { getUserData, updatePassword, updateUsername } from "@/services";
import { setUser } from "@/stores/slices/userSlice";
import { useContext } from "react";
import { UserContext } from "@/context";

const ProfileButtons = () => {
	const dispatch = useDispatch();
	const newUsername = useSelector((state: RootState) => state.newUsername);
	const newPassword = useSelector((state: RootState) => state.newPassword);
	const { isEditing, setIsEditing } = useContext(UserContext);
	const { isPasswordEditing, setIsPasswordEditing } = useContext(UserContext);

	const handleCancelChanges = () => {
		setIsEditing(false);
		setIsPasswordEditing(false);
	};

	const handleSaveChanges = async () => {
		if (isEditing) {
			await updateUsername(newUsername);
		}
		if (isPasswordEditing) {
			console.log("newPassword", newPassword);
			await updatePassword(newPassword);
		}
		const user = await getUserData();
		setIsEditing(false);
		setIsPasswordEditing(false);
		dispatch(setUser(user.data));
	};

	return (
		<div className="flex gap-6">
			<button
				onClick={handleCancelChanges}
				className="text-xl text-gray-300">
				Cancel
			</button>
			<Button
				onClick={handleSaveChanges}
				className="inline-block text-xl bg-red-600">
				Save Changes
			</Button>
		</div>
	);
};

export default ProfileButtons;
