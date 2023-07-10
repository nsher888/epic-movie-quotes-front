import { NewsFeedPage } from "@/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const NewsFeed = () => {
	return <NewsFeedPage />;
};

export default NewsFeed;

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "newsfeed"])),
		},
	};
}
