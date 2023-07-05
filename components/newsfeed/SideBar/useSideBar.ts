import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const useSideBar = () => {
	const router = useRouter();
	const isNewsfeedPage = router.pathname === "/newsfeed";
	const isListPage = router.pathname === "/list";
	const isProfilePage = router.pathname === "/profile";
	const { t } = useTranslation("newsfeed");

	return {
		isNewsfeedPage,
		isListPage,
		isProfilePage,
		t,
	};
};

export default useSideBar;
