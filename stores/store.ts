import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import userReducer from "./slices/userSlice";
import newUsernameReducer from "./slices/newUsernameSlice";
import newPasswordReducer from "./slices/newPasswordSlice";

const store = configureStore({
	reducer: {
		modal: modalReducer,
		user: userReducer,
		newUsername: newUsernameReducer,
		newPassword: newPasswordReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
