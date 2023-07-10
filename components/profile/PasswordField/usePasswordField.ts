import { UserContext } from "@/context";
import { useContext } from "react";
import { useTranslation } from "next-i18next";

const usePasswordField = () => {
	const { isPasswordEditing, setIsPasswordEditing } = useContext(UserContext);

	const handleEditClick = () => {
		setIsPasswordEditing((prevIsEditing) => !prevIsEditing);
	};

	const { t } = useTranslation("profile");

	return {
		handleEditClick,
		isPasswordEditing,
		t,
	};
};

export default usePasswordField;
