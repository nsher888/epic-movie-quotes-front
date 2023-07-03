import useAuth from "@/hooks/useAuth";
import { logOutUser } from "@/services/session/logOutUser";
import { hideModal } from "@/stores/slices/modalSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const useNavbar = () => {
	const { logOut } = useAuth();
	const { push } = useRouter();
	const dispatch = useDispatch();

	const handleLogout = async () => {
		try {
			await logOutUser();
			logOut();
			push("/");
			dispatch(hideModal());
		} catch (error: any) {
			const message = error.response.data.message;
		}
	};

	return {
		handleLogout,
	};
};

export default useNavbar;
