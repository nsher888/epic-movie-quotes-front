import {
	deleteUserMovie,
	getUserMovie,
} from "@/services/profile/getUserMovies";
import { showcrudModal } from "@/stores";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const useMovieItem = () => {
	const router = useRouter();
	const { id } = router.query;
	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["movies", id],
		queryFn: () => getUserMovie(id as string),
	});
	const locale = router.locale as "en" | "ka";
	const { push } = useRouter();
	const dispatch = useDispatch();

	const movie = data?.data.movie;
	const QueryClient = useQueryClient();

	const deleteMovieMutation = useMutation({
		mutationFn: deleteUserMovie,
		onSuccess: () => {
			QueryClient.invalidateQueries({
				queryKey: ["movies"],
			}),
				push("/list");
		},
	});

	const handleDelete = () => {
		const id = movie.id;
		deleteMovieMutation.mutate(id);
	};

	const handleEdit = () => {
		dispatch(showcrudModal("editMovie"));
	};

	return {
		handleDelete,
		isLoading,
		isError,
		data,
		error,
		locale,
		movie,
		handleEdit,
	};
};

export default useMovieItem;
