import { showModal } from "@/stores";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useHome = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	useEffect(() => {
		const { email, token, verify } = router.query;
		if (email && token) {
			dispatch(showModal("resetPassword"));
		}

		if (verify) {
			router.replace("/");
			dispatch(showModal("ChangeSuccessfull"));
		}
	}, [dispatch, router, router.query]);
};

export default useHome;
