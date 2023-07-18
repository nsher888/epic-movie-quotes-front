import { DeleteMovieIcon, EditMovieIcon } from '@/components';
import useMovieItem from './useMovieItem';

const MovieItem = () => {
  const { handleDelete, isLoading, movie, locale, handleEdit } = useMovieItem();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='w-full pt-8'>
      <div className='flex items-center justify-between'>
        <h1 className='pl-16 text-2xl '>Movie Description</h1>
      </div>
      <div className='flex gap-5 mt-8'>
        <img
          src={movie.image}
          className='w-[50rem] h-[27rem] object-cover rounded-xl'
        />
        <div className=''>
          <div className='flex items-center justify-between gap-4'>
            <h1 className='mb-6 text-2xl text-orange-200'>
              {`${movie.title[locale]} (${movie.year})`}
            </h1>
            <div className='flex self-start rounded-xl items-center justify-between gap-4 px-6 py-3 bg-[#24222F]'>
              <div onClick={handleEdit}>
                <EditMovieIcon />
              </div>
              <span className='w-[1px] h-4 bg-gray-300'></span>
              <div onClick={handleDelete}>
                <DeleteMovieIcon />
              </div>
            </div>
          </div>

          <p className='mb-5 text-lg'>Director: {movie.director[locale]}</p>
          <p className='text-lg text-gray-300'>{movie.description[locale]}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
