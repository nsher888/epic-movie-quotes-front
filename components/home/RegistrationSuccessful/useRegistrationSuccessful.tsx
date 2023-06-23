const useRegistrationSuccessful = () => {
	const openGmail = () => {
		window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
	};

	return {
		openGmail,
	};
};

export default useRegistrationSuccessful;
