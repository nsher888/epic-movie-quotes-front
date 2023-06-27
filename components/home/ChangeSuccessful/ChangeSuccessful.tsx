import { Button, SuccessIcon } from "@/components";
import useChangeSuccessful from "./useChangeSuccessful";

const ChangeSuccessful = () => {
	const { switchToForm } = useChangeSuccessful();
	return (
		<div className="flex flex-col items-center max-w-sm">
			<SuccessIcon />
			<h2 className="mt-5 mb-8 text-3xl">Success!</h2>
			<p className="mb-10 text-center">
				Your Password changed successfully
			</p>

			<Button
				type="submit"
				className="w-full mb-4 bg-red-600"
				onClick={() => switchToForm("login")}>
				Log In
			</Button>
		</div>
	);
};

export default ChangeSuccessful;
