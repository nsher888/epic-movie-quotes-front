import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import userReducer from "./slices/userSlice";
import newUsernameReducer from "./slices/newUsernameSlice";

const store = configureStore({
	reducer: {
		modal: modalReducer,
		user: userReducer,
		newUsername: newUsernameReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
