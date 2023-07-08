import { createSlice } from "@reduxjs/toolkit";

const newUsernameSlice = createSlice({
	name: "newUsername",
	initialState: "",
	reducers: {
		setNewUsername: (state, action) => {
			return action.payload;
		},
	},
});

export const { setNewUsername } = newUsernameSlice.actions;
export default newUsernameSlice.reducer;
