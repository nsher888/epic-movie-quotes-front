import React from "react";
import useCustomSelectBox from "./useCustomSelectBox";

const genres: string[] = [
	"Action",
	"Adventure",
	"Comedy",
	"Drama",
	"Fantasy",
	"Horror",
	"Romance",
	"Thriller",
];

const CustomSelectBox = ({ register }: { register: any }) => {
	const {
		selectedGenres,
		showOptions,
		inputRef,
		handleGenreToggle,
		handleInputClick,
	} = useCustomSelectBox(genres);

	return (
		<div className="relative text-xl " ref={inputRef}>
			<div
				className="flex flex-wrap min-h-[46px] gap-1 p-2 bg-transparent border border-white rounded-md"
				onClick={handleInputClick}>
				{selectedGenres.map((genre) => (
					<div
						key={genre}
						className="flex items-center bg-gray-500 rounded-md">
						<div className="px-2">{genre}</div>
						<div
							onClick={() => handleGenreToggle(genre)}
							className="rounded cursor-pointer select-none "></div>
					</div>
				))}
				<input
					type="text"
					className="hidden w-full h-full px-2 py-1 bg-transparent border rounded-md"
					placeholder="Select genres"
					readOnly
				/>
			</div>
			{showOptions && (
				<div className="absolute z-50 w-full mt-2 overflow-y-auto bg-green-700 rounded-md shadow-lg max-h-48">
					{genres.map((genre) => (
						<label
							key={genre}
							className="block px-4 py-2 cursor-pointer">
							<input
								type="checkbox"
								checked={selectedGenres.includes(genre)}
								onChange={() => handleGenreToggle(genre)}
								className="mr-2 text-blue-500 form-checkbox"
								{...register}
							/>
							{genre}
						</label>
					))}
				</div>
			)}
		</div>
	);
};

export default CustomSelectBox;
