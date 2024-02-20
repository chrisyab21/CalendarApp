import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type uiState = {
  isDateModalOpen: boolean
}

const initialState: uiState = {
  isDateModalOpen: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    onOpenDateModal: (state) => {
      state.isDateModalOpen = true;
    },
    onCloseDateModal: (state) => {

      state.isDateModalOpen = false;
    }    
  },
});

// Action creators are generated for each case reducer function
export const {onOpenDateModal, onCloseDateModal } = uiSlice.actions