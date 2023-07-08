import { RootState } from "@/stores/store";
import { useState } from "react";
import { useSelector } from "react-redux";

const useUsernameField = () => {
	const user = useSelector((state: RootState) => state.user.user);

	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing((prev) => !prev);
	};

	return {
		user,
		handleEditClick,
		isEditing,
	};
};
export default useUsernameField;
