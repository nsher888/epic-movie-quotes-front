import { getUserMovies } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useListPage = () => {
	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["movies", "id"],
		queryFn: getUserMovies,
	});
	const router = useRouter();
	const locale = router.locale as "en" | "ka";
	const movie = data?.data.movies;

	return {
		isLoading,
		isError,
		data,
		error,
		locale,
		movie,
	};
};

export default useListPage;
