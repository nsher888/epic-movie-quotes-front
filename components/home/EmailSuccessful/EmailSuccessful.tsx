import { Button, EmailSent } from "@/components";
import useRegistrationSuccessful from "./useRegistrationSuccessful";

const EmailSuccessfull = () => {
	const { openGmail } = useRegistrationSuccessful();

	return (
		<div className="flex flex-col items-center max-w-sm">
			<EmailSent />
			<h2 className="mt-5 mb-8 text-3xl">Thank You</h2>
			<p className="mb-10 text-center">
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

export default EmailSuccessfull;
