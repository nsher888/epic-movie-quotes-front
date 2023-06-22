import { showModal, hideModal } from "@/stores/slices/modalSlice";
import { useDispatch } from "react-redux";

export const useModalActions = () => {
	const dispatch = useDispatch();

	const openSignUpModal = () => {
		dispatch(showModal("signup"));
	};

	const openLogInModal = () => {
		dispatch(showModal("login"));
	};

	return { openSignUpModal, openLogInModal };
};
