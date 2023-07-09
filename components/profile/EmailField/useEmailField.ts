import { RootState } from "@/stores/store";
import { useSelector } from "react-redux";
import { UserContext } from "@/context";
import { useContext } from "react";

const useEmailField = () => {
	const user = useSelector((state: RootState) => state.user.user);

	const { isEmailEditing, setIsEmailEditing } = useContext(UserContext);

	const handleEditClick = () => {
		setIsEmailEditing((prevIsEmailEditing) => !prevIsEmailEditing);
	};

	return {
		user,
		isEmailEditing,
		handleEditClick,
	};
};
export default useEmailField;
