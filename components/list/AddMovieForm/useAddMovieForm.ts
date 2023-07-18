import { storeUserMovie } from "@/services";
import { hidecrudModal } from "@/stores";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const useAddMovieForm = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();

	const queryClient = useQueryClient();
	const createMovieMutation = useMutation({
		mutationFn: storeUserMovie,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["movies"],
			});
			dispatch(hidecrudModal());
		},
	});

	const onSubmit = async (data: any) => {
		try {
			data.image = data.image[0];
			await createMovieMutation.mutateAsync(data);
		} catch (error) {
			console.error(error);
		}
	};

	return {
		register,
		handleSubmit,
		onSubmit,
	};
};

export default useAddMovieForm;
