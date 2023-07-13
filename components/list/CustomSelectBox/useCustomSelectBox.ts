import { useState, useRef, useEffect } from "react";

const useCustomSelectBox = (genres: string[]) => {
	const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
	const [showOptions, setShowOptions] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleGenreToggle = (genre: string) => {
		if (selectedGenres.includes(genre)) {
			setSelectedGenres(selectedGenres.filter((g) => g !== genre));
		} else {
			setSelectedGenres([...selectedGenres, genre]);
		}
	};

	const handleInputClick = () => {
		setShowOptions(!showOptions);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			inputRef.current &&
			!inputRef.current.contains(event.target as Node)
		) {
			setShowOptions(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return {
		selectedGenres,
		showOptions,
		inputRef,
		handleGenreToggle,
		handleInputClick,
	};
};

export default useCustomSelectBox;
