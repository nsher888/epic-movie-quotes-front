export type LoginFormTypes = {
	email: string;
	password: string;
	remember_me: string;
};

export type InputFieldTypes = {
	label: string;
	type: string;
	id: string;
	placeholder: string;
	errors: {
		message?: string;
	};
	register: (rules?: RegistrationOptions) => void;
};

export type RegistrationFormTypes = {
	name: string;
	email: string;
	password: string;
	confirm_password: string;
};
