import { NavBar, SideBar, UserProfile } from "@/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const profile = () => {
	return (
		<div className="min-h-screen text-white bg-feed-background">
			<NavBar />

			<div className="flex">
				<SideBar />

				<div className="pt-8 ">
					<h1 className="pl-16 text-2xl ">My Profile</h1>
					<UserProfile />
				</div>
			</div>
		</div>
	);
};

export default profile;

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "newsfeed"])),
		},
	};
}
