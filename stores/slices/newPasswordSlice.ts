import { createSlice } from "@reduxjs/toolkit";

const newPasswordSlice = createSlice({
	name: "newPassword",
	initialState: {
		password: "",
		confirm_password: "",
	},
	reducers: {
		setNewPassword: (state, action) => {
			return {
				...state,
				password: action.payload.password,
				confirm_password: action.payload.confirm_password,
			};
		},
	},
});

export const { setNewPassword } = newPasswordSlice.actions;
export default newPasswordSlice.reducer;
