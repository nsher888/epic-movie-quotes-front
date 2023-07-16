import { Button } from "@/components";
import useListHeader from "./useListHeader";

const ListHeader = () => {
	const { handleAddMovieClick } = useListHeader();
	return (
		<div className="flex items-center gap-8">
			<div className="">
				<div className="relative flex items-center w-full h-12 overflow-hidden bg-transparent rounded-lg">
					<div className="grid w-12 h-full text-gray-300 place-items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>

					<input
						className="text-gray-700 bg-transparent outline-none"
						type="text"
						id="search"
						placeholder="Search"
					/>
				</div>
			</div>
			<Button onClick={handleAddMovieClick} className="bg-red-600">
				add movie
			</Button>
		</div>
	);
};

export default ListHeader;
