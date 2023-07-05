import { Button, LanguageSwitcher } from "@/components";
import { useTranslation } from "next-i18next";

interface HeaderProps {
	onSignUp: () => void;
	onLogIn: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignUp, onLogIn }) => {
	const { t } = useTranslation("landing");
	return (
		<header className="flex items-center justify-between px-16 pt-6">
			<p className="text-orange-200">MOVIE QUOTES</p>

			<div className="flex items-center gap-10">
				<LanguageSwitcher />

				<div className="flex gap-4">
					<Button className="bg-red-600" onClick={onSignUp}>
						{t("signUp")}
					</Button>
					<Button className="border border-white" onClick={onLogIn}>
						{t("logIn")}
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
