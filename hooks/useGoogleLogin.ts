import { useEffect } from "react";
import { useRouter } from "next/router";
import { googleLoginCallback } from "@/services/session/googleLogin";
import { getCSRFToken } from "@/services/session/getCSRFToken";
import { setCookie } from "cookies-next";

const useGoogleLogin = () => {
	const router = useRouter();

	const handleCallback = async (data: any) => {
		try {
			await getCSRFToken();
			await googleLoginCallback(data);
			router.push("/newsfeed");
			setCookie("authenticated", "true");
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
