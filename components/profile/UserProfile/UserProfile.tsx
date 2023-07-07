import {
	EmailField,
	PasswordField,
	ProfileButtons,
	UserAvatar,
	UsernameField,
} from "@/components";

const UserProfile = () => {
	return (
		<div className="mb-[1000px] flex flex-col">
			<div className="bg-[#11101A] min-h-[700px] mb-16  min-w-[1000px] mt-32  flex flex-col items-center  shadow-lg pl-48 pr-52">
				<UserAvatar />
				<UsernameField />
				<EmailField />
				<PasswordField />
			</div>

			<div className="self-end ">
				<ProfileButtons />
			</div>
		</div>
	);
};

export default UserProfile;
