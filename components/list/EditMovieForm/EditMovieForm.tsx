import { Button, DragDropFile } from "@/components";
import useEditMovieForm from "./useEditMovieForm";

const EditMovieForm = () => {
	const { register, handleSubmit, setValue, movie, onSubmit } =
		useEditMovieForm();

	return (
		<div className="w-full">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="relative mb-4">
					<input
						id="title_en"
						type="text"
						className="w-full py-2 pl-4 text-xl text-white bg-transparent border border-gray-300 rounded outline-none pr-14 placeholder:text-white"
						placeholder="Movie Name"
						{...register("title_en")}
					/>
					<p className="absolute top-0 bottom-0 flex items-center justify-center text-xl text-gray-500 right-4">
						Eng
					</p>
				</div>

				<div className="relative mb-4">
					<input
						id="title_ka"
						type="text"
						className="w-full py-2 pl-4 text-xl text-white bg-transparent border border-gray-300 rounded outline-none pr-14 placeholder:text-white"
						placeholder="ფილმის სახელი"
						{...register("title_ka")}
					/>
					<p className="absolute top-0 bottom-0 flex items-center justify-center text-xl text-gray-500 right-4">
						ქარ
					</p>
				</div>

				<div className="relative mb-4">
					<input
						id="year"
						type="text"
						className="w-full py-2 pl-4 text-xl text-white bg-transparent border border-gray-300 rounded outline-none pr-14 placeholder:text-white"
						placeholder="წელი/Year"
						{...register("year")}
					/>
				</div>

				<div className="relative mb-4">
					<input
						id="director_en"
						type="text"
						className="w-full py-2 pl-4 text-xl text-white bg-transparent border border-gray-300 rounded outline-none pr-14 placeholder:text-white"
						placeholder="Director"
						{...register("director_en")}
					/>
					<p className="absolute top-0 bottom-0 flex items-center justify-center text-xl text-gray-500 right-4">
						Eng
					</p>
				</div>
				<div className="relative mb-4">
					<input
						id="director_ka"
						type="text"
						className="w-full py-2 pl-4 text-xl text-white bg-transparent border border-gray-300 rounded outline-none pr-14 placeholder:text-white"
						placeholder="რეჟისორი"
						{...register("director_ka")}
					/>
					<p className="absolute top-0 bottom-0 flex items-center justify-center text-xl text-gray-500 right-4">
						ქარ
					</p>
				</div>

				<div className="relative mb-4">
					<textarea
						id="description_en"
						className="w-full min-h-[4rem] py-2 pl-4 text-xl text-white bg-transparent border border-gray-300 rounded outline-none pr-14 placeholder:text-white"
						placeholder="Movie Description"
						{...register("description_en")}
					/>
					<p className="absolute top-0 bottom-0 flex items-center justify-center text-xl text-gray-500 right-4">
						Eng
					</p>
				</div>

				<div className="relative mb-4">
					<textarea
						id="description_ka"
						className="w-full min-h-[4rem] py-2 pl-4 text-xl text-white bg-transparent border border-gray-300 rounded outline-none pr-14 placeholder:text-white"
						placeholder="ფილმის აღწერა"
						{...register("description_ka")}
					/>
					<p className="absolute top-0 bottom-0 flex items-center justify-center text-xl text-gray-500 right-4">
						ქარ
					</p>
				</div>

				<DragDropFile register={register("image")} />

				<Button className="bg-red-600" type="submit">
					Edit Movie
				</Button>
			</form>
		</div>
	);
};

export default EditMovieForm;
