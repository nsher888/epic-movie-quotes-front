import {
	CrudModal,
	NavBar,
	SideBar,
	EditMovieForm,
	MovieItem,
} from "@/components";
import { RootState } from "@/stores/store";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";

const MovieDescription = () => {
	const { isModalVisible, activeForm } = useSelector(
		(state: RootState) => state.crudModal
	);
	return (
		<>
			<div className="min-h-screen text-white bg-feed-background">
				<NavBar />

				<div className="flex pr-16">
					<SideBar />

					<MovieItem />
				</div>
			</div>

			<CrudModal isVisible={isModalVisible}>
				{activeForm === "editMovie" && <EditMovieForm />}
			</CrudModal>
		</>
	);
};

export default MovieDescription;

export async function getServerSideProps({ locale }: any) {
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
