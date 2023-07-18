import { PropsType } from "./types";
import useCrudModal from "./useCrudModal";

const CrudModal: React.FC<PropsType> = ({ isVisible, children }) => {
	const { handleOutsideClick } = useCrudModal();

	return isVisible ? (
		<div
			className="fixed z-20 flex items-center justify-center text-white top-[20%] left-0 right-0"
			onClick={handleOutsideClick}>
			<div className="min-h-[25rem] min-w-[50rem] bg-[#11101A] flex justify-center py-14 rounded-xl px-8">
				{children}
			</div>
		</div>
	) : null;
};

export default CrudModal;
