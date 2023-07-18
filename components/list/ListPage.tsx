import { ListHeader } from "@/components";
import Link from "next/link";
import useListPage from "./useListPage";

const ListPage = () => {
	const { locale, isLoading, movie } = useListPage();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="w-full pt-8">
			<div className="flex items-center justify-between">
				<h1 className="pl-16 text-2xl "></h1>
				<ListHeader />
			</div>
			<div className="grid grid-cols-1 mt-16 gap-x-8 gap-y-20 md:grid-cols-3">
				{movie?.map((movie: any) => (
					<div key={movie.id}>
						<img
							src={movie.image}
							alt="Movie Image"
							className="object-cover w-full h-full max-h-[23rem] mb-4 rounded-xl"
						/>
						<p className="text-2xl ">
							<Link href={`/list/${movie.id}`}>
								{`${movie.title[locale]} (${movie.year})`}
							</Link>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ListPage;
