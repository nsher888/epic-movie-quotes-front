import { showcrudModal } from "@/stores";
import { useDispatch } from "react-redux";

const useListHeader = () => {
	const dispatch = useDispatch();
	const handleAddMovieClick = () => {
		dispatch(showcrudModal("addMovie"));
	};

	return {
		handleAddMovieClick,
	};
};

export default useListHeader;
