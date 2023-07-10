import { RootState } from "@/stores/store";
import { useSelector } from "react-redux";
import { UserContext } from "@/context";
import { useContext } from "react";
import { useTranslation } from "next-i18next";

const useEmailField = () => {
	const user = useSelector((state: RootState) => state.user.user);

	const { isEmailEditing, setIsEmailEditing } = useContext(UserContext);

	const handleEditClick = () => {
		setIsEmailEditing((prevIsEmailEditing) => !prevIsEmailEditing);
	};

	const { t } = useTranslation("profile");

	return {
		user,
		isEmailEditing,
		handleEditClick,
		t,
	};
};
export default useEmailField;
