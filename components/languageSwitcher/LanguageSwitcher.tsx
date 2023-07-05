import { DownArrow } from "@/components";
import useLanguageSwitcher from "./useLanguageSwitcher";

const LanguageSwitcher = () => {
	const { isDropdownVisible, setIsDropdownVisible, changeLanguage, router } =
		useLanguageSwitcher();

	return (
		<div className="relative inline-block">
			<div
				className="flex items-center gap-2 cursor-pointer"
				onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
				<h1 className="text-white">
					{router.locale === "en" ? "Eng" : "ქართ"}
				</h1>
				<DownArrow />
			</div>

			{isDropdownVisible && (
				<div className="absolute right-0 p-2 rounded-md bg-slate-700 top-8 min-w-[50px]">
					<ul>
						<li>
							{router.locale !== "en" && (
								<button
									className={`text-white px-2 py-1 bg-transparent rounded-md`}
									onClick={() => changeLanguage("en")}>
									Eng
								</button>
							)}
							{router.locale !== "ka" && (
								<button
									className={`text-white px-2 py-1 bg-transparent rounded-md`}
									onClick={() => changeLanguage("ka")}>
									ქართ
								</button>
							)}
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default LanguageSwitcher;
