import User from "@/types/UserType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	user: User;
}

const initialState: UserState = {
	user: {
		id: 0,
		name: "",
		email: "",
		provider_id: "",
		avatar: "",
	},
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
		clearUser: (state) => {
			state.user = {
				id: 0,
				name: "",
				email: "",
				provider_id: "",
				avatar: "",
			};
		},
	},
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
