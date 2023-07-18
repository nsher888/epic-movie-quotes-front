import { getUserMovie, updateUserMovie } from '@/services';
import { hidecrudModal } from '@/stores';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const useEditMovieForm = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['movies', id],
    queryFn: () => getUserMovie(id as string),
  });
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const updateMovieMutation = useMutation({
    mutationFn: updateUserMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['movies'],
      });
      dispatch(hidecrudModal());
    },
  });

  const { register, handleSubmit, setValue } = useForm();

  const movie = data?.data.movie;

  const onSubmit = async (data: any) => {
    try {
      data.image = data.image[0];
      const updatedData = { ...data, id: id };
      updateMovieMutation.mutateAsync(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setValue('title_en', movie.title.en);
    setValue('title_ka', movie.title.ka);
    setValue('year', movie.year);
    setValue('director_en', movie.director.en);
    setValue('director_ka', movie.director.ka);
    setValue('description_en', movie.description.en);
    setValue('description_ka', movie.description.ka);
  }, [movie, setValue]);

  return {
    register,
    handleSubmit,
    setValue,
    movie,
    isLoading,
    isError,
    data,
    error,
    updateMovieMutation,
    onSubmit,
  };
};

export default useEditMovieForm;
