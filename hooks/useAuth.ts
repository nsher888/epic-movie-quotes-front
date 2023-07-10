import { getUserData } from "@/services";
import { hideModal, setUser } from "@/stores";
import { deleteCookie, setCookie } from "cookies-next";
import { useDispatch } from "react-redux";

const useAuth = () => {
	const dispatch = useDispatch();

	const logIn = async () => {
		setCookie("authenticated", "true");
		const user = await getUserData();
		dispatch(setUser(user.data));
		dispatch(hideModal());
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
