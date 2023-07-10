import { UserContext } from "@/context";
import { RootState } from "@/stores/store";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "next-i18next";

const useUsernameField = () => {
	const user = useSelector((state: RootState) => state.user.user);

	const { isEditing, setIsEditing } = useContext(UserContext);

	const handleEditClick = () => {
		setIsEditing((prevIsEditing) => !prevIsEditing);
	};

	const { t } = useTranslation("profile");

	return {
		user,
		isEditing,
		handleEditClick,
		t,
	};
};
export default useUsernameField;
