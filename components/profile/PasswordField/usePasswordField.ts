import { UserContext } from "@/context";
import { useContext } from "react";

const usePasswordField = () => {
	const { isPasswordEditing, setIsPasswordEditing } = useContext(UserContext);

	const handleEditClick = () => {
		setIsPasswordEditing((prevIsEditing) => !prevIsEditing);
	};

	return {
		handleEditClick,
		isPasswordEditing,
	};
};

export default usePasswordField;
