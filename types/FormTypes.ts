import { ChangeEventHandler } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

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
	register?: UseFormRegisterReturn;
	readOnly?: boolean | string;
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
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

export type UsernameEditFormTypes = {
	name: string;
};

export type PasswordEditFormTypes = {
	password: string;
	confirm_password: string;
};

export type EmailEditFormTypes = {
	email: string;
};
