import { useEffect } from "react";
import { useRouter } from "next/router";
import { googleLoginCallback } from "@/services/session/googleLogin";
import { getCSRFToken } from "@/services/session/getCSRFToken";
import { setCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { getUserData } from "@/services/profile/getUserData";
import { setUser } from "@/stores/slices/userSlice";

const useGoogleLogin = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const handleCallback = async (data: any) => {
		try {
			await getCSRFToken();
			await googleLoginCallback(data);
			setCookie("authenticated", "true");
			const user = await getUserData();
			dispatch(setUser(user.data));

			router.push("/newsfeed");
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const data = Object.fromEntries(params.entries());

		if (router.pathname === "/auth/google/callback") {
			handleCallback(data);
		}
	}, []);

	return null;
};

export default useGoogleLogin;
