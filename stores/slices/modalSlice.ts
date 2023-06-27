import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
	isModalVisible: boolean;
	activeForm: string;
}

const initialState: ModalState = {
	isModalVisible: false,
	activeForm: "",
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		showModal: (state, action: PayloadAction<string>) => {
			state.isModalVisible = true;
			state.activeForm = action.payload;
		},
		hideModal: (state) => {
			state.isModalVisible = false;
			state.activeForm = "";
		},
	},
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
