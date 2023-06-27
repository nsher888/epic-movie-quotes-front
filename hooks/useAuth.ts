import { deleteCookie, setCookie } from "cookies-next";

const useAuth = () => {
	const logIn = () => {
		setCookie("authenticated", "true");
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
