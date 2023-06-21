const ImageSection: React.FC<{
	backgroundImage: string;
	text: string;
	movietitle: string;
}> = ({ backgroundImage, text, movietitle }) => {
	return (
		<div
			className="min-h-screen bg-cover bg-center bg-no-repeat relative pl-44 pt-96"
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			<h2 className="text-white text-5xl mb-5 max-w-3xl leading-normal relative">
				{text}
			</h2>
			<p className="text-3xl text-zinc-300">{movietitle}</p>
		</div>
	);
};

export default ImageSection;
