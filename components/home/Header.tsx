import { Button, LanguageSwitcher } from "@/components";

interface HeaderProps {
	onSignUp: () => void;
	onLogIn: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignUp, onLogIn }) => {
	return (
		<header className="flex items-center justify-between px-16 pt-6">
			<p className="text-orange-200">MOVIE QUOTES</p>

			<div className="flex items-center gap-10">
				<LanguageSwitcher />

				<div className="flex gap-4">
					<Button className="bg-red-600" onClick={onSignUp}>
						Sign Up
					</Button>
					<Button className="border border-white" onClick={onLogIn}>
						Log In
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
