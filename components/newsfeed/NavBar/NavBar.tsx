import { Button, LanguageSwitcher } from "@/components";
import useNavbar from "./useNavbar";

const NavBar = () => {
	const { handleLogout, t } = useNavbar();

	return (
		<nav className="flex items-center justify-between h-20 px-16 bg-[#222030] shadow-md">
			<p className="text-orange-200">MOVIE QUOTES</p>

			<div className="flex items-center gap-10">
				<LanguageSwitcher />

				<Button
					className="text-white border border-white transparent"
					onClick={handleLogout}>
					{t("logOut")}
				</Button>
			</div>
		</nav>
	);
};

export default NavBar;
