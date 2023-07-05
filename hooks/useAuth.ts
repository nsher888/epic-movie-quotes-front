import { getUserData } from "@/services/profile/getUserData";
import { setUser } from "@/stores/slices/userSlice";
import User from "@/types/UserType";
import { deleteCookie, setCookie } from "cookies-next";
import { useDispatch } from "react-redux";

const useAuth = () => {
	const dispatch = useDispatch();

	const logIn = async () => {
		setCookie("authenticated", "true");
		const user = await getUserData();
		dispatch(setUser(user.data));
	};

	const logOut = () => {
		setCookie("authenticated", "false");
		deleteCookie("authenticated");
	};

	return {
		logIn,
		logOut,
	};
};

export default useAuth;
