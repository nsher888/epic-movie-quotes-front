import { FormHeader } from "@/components";
import { FieldError } from "react-hook-form";

export type LoginFormTypes = {
	email: string;
	password: string;
};

export type InputFieldTypes = {
	label: string;
	id: string;
	name: string;
	type: string;
	placeholder: string;
	error?: FieldError;
	register: any;
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
