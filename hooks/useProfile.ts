import { useTranslation } from "next-i18next";

const useProfile = () => {
	const { t } = useTranslation("profile");

	return {
		t,
	};
};

export default useProfile;
