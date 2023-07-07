import { Button } from "@/components";

const ProfileButtons = () => {
	return (
		<div className="flex gap-6">
			<button className="text-xl text-gray-300">Cancell</button>
			<Button className="inline-block text-xl bg-red-600">
				Save Changes
			</Button>
		</div>
	);
};

export default ProfileButtons;
