import {
	EmailField,
	PasswordField,
	ProfileButtons,
	UserAvatar,
	UsernameField,
} from "@/components";
import { UserContext } from "@/context";
import useUserProfile from "./useUserProfile";

const UserProfile = () => {
	const {
		isEditing,
		setIsEditing,
		isPasswordEditing,
		setIsPasswordEditing,
		isEmailEditing,
		setIsEmailEditing,
	} = useUserProfile();

	return (
		<UserContext.Provider
			value={{
				isEditing,
				setIsEditing,
				isPasswordEditing,
				setIsPasswordEditing,
				isEmailEditing,
				setIsEmailEditing,
			}}>
			<div className="mb-[1000px]  flex flex-col">
				<div className="bg-[#11101A] mb-16 pb-36 min-w-[1000px] mt-32  flex flex-col items-center  shadow-lg pl-48 pr-52">
					<UserAvatar />
					<UsernameField />
					<EmailField />
					<PasswordField />
				</div>

				{isEditing || isPasswordEditing || isEmailEditing ? (
					<div className="self-end">
						<ProfileButtons />
					</div>
				) : null}
			</div>
		</UserContext.Provider>
	);
};

export default UserProfile;
