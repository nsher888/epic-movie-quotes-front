import Image from "next/image";

const UserAvatar = () => {
	return (
		<div className="flex flex-col items-center gap-4 -mt-24 user-avatar">
			<Image
				src="/assets/images/avatar.jpeg"
				alt="Profile Image"
				width={188}
				height={188}
				className="rounded-full"
			/>
			<form>
				<button className="text-xl ">Upload new photo</button>
			</form>
		</div>
	);
};

export default UserAvatar;
