import { showModal } from "@/stores";
import { useDispatch } from "react-redux";

const useChangeSuccessful = () => {
	const dispath = useDispatch();

	const switchToForm = (formName: string) => {
		dispath(showModal(formName));
	};

	return {
		switchToForm,
	};
};

export default useChangeSuccessful;
