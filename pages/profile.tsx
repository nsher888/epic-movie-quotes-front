import { NavBar, SideBar, UserProfile } from "@/components";
import { useProfile } from "@/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Profile = () => {
	const { t } = useProfile();
	return (
		<div className="min-h-screen text-white bg-feed-background">
			<NavBar />

			<div className="flex">
				<SideBar />

				<div className="pt-8 ">
					<h1 className="pl-16 text-2xl ">{t("myProfile")}</h1>
					<UserProfile />
				</div>
			</div>
		</div>
	);
};

export default Profile;

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"newsfeed",
				"profile",
				"landing",
			])),
		},
	};
}
