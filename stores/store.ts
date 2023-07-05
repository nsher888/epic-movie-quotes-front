import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
	reducer: {
		modal: modalReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
