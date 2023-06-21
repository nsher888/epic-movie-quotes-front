import { Button } from "@/components";

const Header = () => {
	return (
		<header className="px-16 pt-6 flex justify-between items-center">
			<p className="text-orange-200 ">MOVIE QUOTES</p>

			<div className="flex items-center gap-10">
				<div className="flex">
					<p>Eng</p>
				</div>

				<div className="flex gap-4">
					<Button className="bg-red-600">Sign Up</Button>
					<Button className="border border-white">Log In</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
