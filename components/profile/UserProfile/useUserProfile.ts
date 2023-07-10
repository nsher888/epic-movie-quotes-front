import { useState } from "react";
import { useTranslation } from "react-i18next";

const useUserProfile = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [isPasswordEditing, setIsPasswordEditing] = useState(false);
	const [isEmailEditing, setIsEmailEditing] = useState(false);

	return {
		isEditing,
		setIsEditing,
		isPasswordEditing,
		setIsPasswordEditing,
		isEmailEditing,
		setIsEmailEditing,
	};
};

export default useUserProfile;
