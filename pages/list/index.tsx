import { AddMovieForm, ListPage, NavBar, SideBar } from "@/components";
import { CrudModal } from "@/components/list/CrudModal";
import { RootState } from "@/stores/store";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";

const List = () => {
	const { isModalVisible, activeForm } = useSelector(
		(state: RootState) => state.crudModal
	);
	return (
		<>
			<div className="min-h-screen text-white bg-feed-background">
				<NavBar />

				<div className="flex pr-16">
					<SideBar />

					<ListPage />
				</div>
			</div>

			<CrudModal isVisible={isModalVisible}>
				{activeForm === "addMovie" && <AddMovieForm />}
			</CrudModal>
		</>
	);
};

export default List;

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
