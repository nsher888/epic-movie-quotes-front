import { Button } from "@/components";
import useNavbar from "./useNavbar";

const NavBar = () => {
	const { handleLogout } = useNavbar();

	return (
		<nav className="flex items-center justify-between h-20 px-16 bg-green-950">
			<p className="text-orange-200">MOVIE QUOTES</p>

			<div className="flex items-center gap-10">
				<div className="flex">
					<p>Eng</p>
				</div>

				<Button
					className="text-white border border-white transparent"
					onClick={handleLogout}>
					Log Out
				</Button>
			</div>
		</nav>
	);
};

export default NavBar;
