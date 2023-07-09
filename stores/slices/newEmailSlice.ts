import { createSlice } from "@reduxjs/toolkit";

const newEmailSlice = createSlice({
	name: "newEmail",
	initialState: "",
	reducers: {
		setNewEmail: (state, action) => {
			return action.payload;
		},
	},
});

export const { setNewEmail } = newEmailSlice.actions;
export default newEmailSlice.reducer;
