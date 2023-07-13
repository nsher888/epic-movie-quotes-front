import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import crudmodalReducer from "./slices/crudModalSlice";
import userReducer from "./slices/userSlice";
import newUsernameReducer from "./slices/newUsernameSlice";
import newPasswordReducer from "./slices/newPasswordSlice";
import newEmailReducer from "./slices/newEmailSlice";

const store = configureStore({
	reducer: {
		modal: modalReducer,
		crudModal: crudmodalReducer,
		user: userReducer,
		newUsername: newUsernameReducer,
		newPassword: newPasswordReducer,
		newEmail: newEmailReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
