import React, { FC, MouseEvent } from "react";

interface EditMovieIconProps {
	onClick?: (event: MouseEvent<SVGSVGElement, MouseEvent> | any) => void;
}

const EditMovieIcon: FC<EditMovieIconProps> = ({ onClick }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			className="cursor-pointer"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={onClick}></svg>
	);
};

export default EditMovieIcon;
