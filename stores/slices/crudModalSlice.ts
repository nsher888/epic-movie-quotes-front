import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
	isModalVisible: boolean;
	activeForm: string;
}

const initialState: ModalState = {
	isModalVisible: false,
	activeForm: "",
};

const crudModal = createSlice({
	name: "modal",
	initialState,
	reducers: {
		showcrudModal: (state, action: PayloadAction<string>) => {
			state.isModalVisible = true;
			state.activeForm = action.payload;
		},
		hidecrudModal: (state) => {
			state.isModalVisible = false;
			state.activeForm = "";
		},
	},
});

export const { showcrudModal, hidecrudModal } = crudModal.actions;

export default crudModal.reducer;
