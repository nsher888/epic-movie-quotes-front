import React, { useRef, useState } from "react";

const DragDropFile = ({ register }: { register: any }) => {
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
		if (event.dataTransfer.files && event.dataTransfer.files[0]) {
			console.log(event.dataTransfer.files[0]);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (e.target.files && e.target.files[0]) {
			console.log(e.target.files[0]);
		}
	};

	const onButtonClick = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	return (
		<div
			id="drag-file-container"
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
			className="relative max-w-full mb-4 text-center text-black bg-transparent">
			<form
				id="form-file-upload"
				onSubmit={(e) => e.preventDefault()}
				className={`relative border-2 border-rounded bg-transparent border-dashed border-gray-400 bg-gray-100 ${
					dragActive ? "bg-transparent" : "bg-white"
				}`}>
				<input
					ref={inputRef}
					type="file"
					id="input-file-upload"
					multiple={true}
					onChange={handleChange}
					className="hidden bg-transparent"
					{...register}
				/>
				<label
					id="label-file-upload"
					htmlFor="input-file-upload"
					className="flex items-center justify-center bg-transparent">
					<div>
						<p>Drag and drop your file here or</p>
						<button
							className="upload-button"
							onClick={onButtonClick}>
							Upload a file
						</button>
					</div>
				</label>
			</form>
			{dragActive && (
				<div
					id="drag-file-element"
					className="absolute w-full h-full bg-transparent border-rounded"></div>
			)}
		</div>
	);
};

export default DragDropFile;
