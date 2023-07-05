import { useRouter } from "next/router";
import { useState } from "react";

const useLanguageSwitcher = () => {
	const router = useRouter();
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);

	const changeLanguage = (language: any) => {
		setIsDropdownVisible(false);
		router.push(router.pathname, router.asPath, { locale: language });
	};

	return {
		isDropdownVisible,
		setIsDropdownVisible,
		changeLanguage,
		router,
	};
};

export default useLanguageSwitcher;
