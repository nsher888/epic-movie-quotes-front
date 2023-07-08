import React, { createContext } from "react";

interface UserContextType {
	isEditing: boolean;
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType>({
	isEditing: false,
	setIsEditing: () => {},
});

export default UserContext;
