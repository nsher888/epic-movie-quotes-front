import { Button } from "@/components";
import useProfileButtons from "./useProfileButtons";

const ProfileButtons = () => {
	const { handleCancelChanges, handleSaveChanges } = useProfileButtons();

	return (
		<div className="flex gap-6">
			<button
				onClick={handleCancelChanges}
				className="text-xl text-gray-300">
				Cancel
			</button>
			<Button
				onClick={handleSaveChanges}
				className="inline-block text-xl bg-red-600">
				Save Changes
			</Button>
		</div>
	);
};

export default ProfileButtons;
