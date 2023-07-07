import { FieldError } from "react-hook-form";

export type LoginFormTypes = {
	email: string;
	password: string;
};

export type InputFieldTypes = {
	label?: string;
	id?: string;
	name?: string;
	type?: string;
	placeholder?: string;
	error?: FieldError;
	register?: any;
	readOnly?: boolean | string;
	value?: string;
};

export type RegistrationFormTypes = {
	name: string;
	email: string;
	password: string;
	confirm_password: string;
};

export type FormHeaderTypes = {
	title: string;
	subtitle: string;
};

export type ForgotPasswordFormTypes = {
	email: string;
};

export type ResetPasswordFormTypes = {
	token?: string;
	email?: string;
	password?: string;
	confirm_password?: string;
};
