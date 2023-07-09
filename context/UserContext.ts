import React, { createContext } from "react";

interface UserContextType {
	isEditing: boolean;
	isPasswordEditing: boolean;
	isEmailEditing: boolean;
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
	setIsPasswordEditing: React.Dispatch<React.SetStateAction<boolean>>;
	setIsEmailEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType>({
	isEditing: false,
	isPasswordEditing: false,
	isEmailEditing: false,
	setIsEditing: () => {},
	setIsPasswordEditing: () => {},
	setIsEmailEditing: () => {},
});

export default UserContext;
