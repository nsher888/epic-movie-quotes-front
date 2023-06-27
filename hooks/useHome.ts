import { showModal } from "@/stores/slices/modalSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useHome = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	useEffect(() => {
		const { email, token } = router.query;
		if (email && token) {
			dispatch(showModal("resetPassword"));
		}
	}, [dispatch, router, router.query]);
};

export default useHome;
