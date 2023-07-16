import useDragDropFile from "./useDragDropFile";

const DragDropFile = ({ register }: { register: any }) => {
	const {
		dragActive,
		inputRef,
		handleDragEnter,
		handleDragLeave,
		handleDragOver,
		handleDrop,
		handleChange,
		onButtonClick,
	} = useDragDropFile();
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
