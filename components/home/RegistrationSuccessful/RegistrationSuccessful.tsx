import { Button } from "@/components";
import EmailSent from "@/components/icons/EmailSent";
import useRegistrationSuccessful from "./useRegistrationSuccessful";

const RegistrationSuccessful = () => {
	const { openGmail } = useRegistrationSuccessful();

	return (
		<div className="flex flex-col items-center max-w-sm">
			<EmailSent />
			<h2 className="mt-5 text-3xl mb-8">Thank You</h2>
			<p className="text-center mb-10">
				Please check your email and follow the instructions to activate
				your account.
			</p>

			<Button
				type="submit"
				className="w-full mb-4 bg-red-600"
				onClick={openGmail}>
				Go to my email
			</Button>
		</div>
	);
};

export default RegistrationSuccessful;
