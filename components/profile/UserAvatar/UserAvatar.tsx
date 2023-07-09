import useUserAvatar from "./useUserAvatar";

const UserAvatar = () => {
	const { user, handleFileChangeAndUpload, t } = useUserAvatar();

	return (
		<div className="flex flex-col items-center gap-4 -mt-24 user-avatar">
			<picture>
				<img
					src={user.avatar}
					alt="Profile Image"
					className="object-cover rounded-full w-[188px] h-[188px]"
				/>
			</picture>
			<form className="flex flex-col text-center">
				<label className="text-xl cursor-pointer" htmlFor="avatar">
					{t("UploadNewAvatar")}
				</label>
				<input
					name="avatar"
					id="avatar"
					type="file"
					className="hidden"
					onChange={handleFileChangeAndUpload}
				/>
			</form>
		</div>
	);
};

export default UserAvatar;
