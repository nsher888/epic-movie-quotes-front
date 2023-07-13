import { useDispatch } from "react-redux";
import { hidecrudModal } from "@/stores";

const useCrudModal = () => {
	const dispatch = useDispatch();

	const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			dispatch(hidecrudModal());
		}
	};

	return {
		handleOutsideClick,
	};
};

export default useCrudModal;
