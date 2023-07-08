import React, { createContext } from "react";

interface UserContextType {
	isEditing: boolean;
	isPasswordEditing: boolean;
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
	setIsPasswordEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType>({
	isEditing: false,
	isPasswordEditing: false,
	setIsEditing: () => {},
	setIsPasswordEditing: () => {},
});

export default UserContext;
