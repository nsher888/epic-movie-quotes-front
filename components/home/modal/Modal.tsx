import { PropsType } from "./types";
import useModal from "./useModal";

const Modal: React.FC<PropsType> = ({ isVisible, children }) => {
	const { handleOutsideClick } = useModal();

	if (!isVisible) return null;

	return (
		<div
			className="fixed inset-0 bg-[rgba(0, 0, 0, 0.54)] backdrop-blur-sm flex justify-center items-center text-white z-20"
			onClick={handleOutsideClick}>
			<div className="w-[600px] min-h-[400px] bg-[#222030] flex justify-center py-14 rounded-xl">
				{children}
			</div>
		</div>
	);
};

export default Modal;
