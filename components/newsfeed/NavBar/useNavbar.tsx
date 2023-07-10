import useAuth from "@/hooks/useAuth";
import { logOutUser } from "@/services";
import { hideModal } from "@/stores";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
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

	const { t } = useTranslation("newsfeed");

	return {
		handleLogout,
		t,
	};
};

export default useNavbar;
