import { ListHeader } from "@/components";
import { getUserMovies } from "@/services/profile/getUserMovies";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ListPage = () => {
	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["movies", "id"],
		queryFn: getUserMovies,
	});
	const router = useRouter();
	const locale = router.locale as "en" | "ka";

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const movie = data?.data.movies;

	console.log(movie);

	return (
		<div className="w-full pt-8">
			<div className="flex items-center justify-between">
				<h1 className="pl-16 text-2xl ">
					My list of movies (total: {movie.length})
				</h1>
				<ListHeader />
			</div>
			<div className="grid grid-cols-1 mt-16 gap-x-8 gap-y-20 md:grid-cols-3">
				{movie?.map((movie: any) => (
					<div key={movie.id}>
						<Image
							src="/assets/images/image3.png"
							alt="Movie Image"
							width={440}
							height={371}
							sizes="min-height: 371px"
							className="object-cover h-full mb-4 rounded-xl"
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
