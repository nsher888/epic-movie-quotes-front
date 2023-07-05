import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

const useSideBar = () => {
	const router = useRouter();
	const isNewsfeedPage = router.pathname === "/newsfeed";
	const isListPage = router.pathname === "/list";
	const isProfilePage = router.pathname === "/profile";
	const { t } = useTranslation("newsfeed");

	const user = useSelector((state: RootState) => state.user.user);

	return {
		isNewsfeedPage,
		isListPage,
		isProfilePage,
		t,
		user,
	};
};

export default useSideBar;
