import { HouseIcon, CameraIcon } from "@/components";
import Image from "next/image";
import Link from "next/link";
import useSideBar from "./useSideBar";

const SideBar = () => {
	const { isNewsfeedPage, isListPage, isProfilePage, t, user } = useSideBar();

	console.log(user);

	return (
		<ul className="pt-8 pl-20 text-white">
			<li className="flex mb-10">
				<Image
					src="/assets/images/avatar.jpeg"
					alt="Profile Image"
					width={60}
					height={60}
					className={`mr-6 rounded-full ${
						isProfilePage ? "border border-red-500" : ""
					}`}
				/>
				<div className="flex flex-col gap-2">
					<p className="text-2xl">{user.name}</p>
					<Link href="/profile">{t("editProfile")}</Link>
				</div>
			</li>
			<li className="flex items-center gap-8 mb-10 text-2xl">
				<HouseIcon color={isNewsfeedPage ? "red" : "#fff"} />
				<Link href="/newsfeed">{t("newsFeed")}</Link>
			</li>
			<li className="flex items-center gap-8 text-2xl ">
				<CameraIcon color={isListPage ? "red" : "#fff"} />
				<Link href="/list">{t("listOfMovies")}</Link>
			</li>
		</ul>
	);
};

export default SideBar;
