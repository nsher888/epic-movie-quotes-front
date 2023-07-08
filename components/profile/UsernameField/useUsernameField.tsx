import { UserContext } from "@/context";
import { RootState } from "@/stores/store";
import { useContext } from "react";
import { useSelector } from "react-redux";

const useUsernameField = () => {
	const user = useSelector((state: RootState) => state.user.user);

	const { isEditing, setIsEditing } = useContext(UserContext);

	const handleEditClick = () => {
		setIsEditing((prevIsEditing) => !prevIsEditing);
	};

	return {
		user,
		isEditing,
		handleEditClick,
	};
};
export default useUsernameField;
