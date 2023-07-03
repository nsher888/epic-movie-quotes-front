import { useDispatch } from "react-redux";
import { hideModal } from "@/stores/slices/modalSlice";

const useModal = () => {
	const dispatch = useDispatch();

	const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			dispatch(hideModal());
		}
	};

	return {
		handleOutsideClick,
	};
};

export default useModal;
