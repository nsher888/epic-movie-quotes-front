import { useRef, useState } from "react";

const useDragDropFile = () => {
	const [dragActive, setDragActive] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(true);
	};

	const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setDragActive(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
	};

	const onButtonClick = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	return {
		dragActive,
		inputRef,
		handleDragEnter,
		handleDragLeave,
		handleDragOver,
		handleDrop,
		handleChange,
		onButtonClick,
	};
};

export default useDragDropFile;
