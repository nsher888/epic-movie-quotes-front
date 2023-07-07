import {
	EmailField,
	PasswordField,
	UserAvatar,
	UsernameField,
} from "@/components";

const UserProfile = () => {
	return (
		<div className="bg-[#11101A] min-h-[700px]  min-w-[1000px] mt-32 mb-[1000px] flex flex-col items-center  shadow-lg pl-48 pr-52">
			<UserAvatar />
			<UsernameField />
			<EmailField />
			<PasswordField />
		</div>
	);
};

export default UserProfile;
