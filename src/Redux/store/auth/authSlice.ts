
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

export type authState = {

  status: 'authenticated' | 'checking' | 'not-authenticated',
  correo: string | null,
  password: string  | null,

}

const initialState: authState = {

  status: 'authenticated',
  correo: null,
  password: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,

  reducers: {
    login: (state) => {

      state.status = 'authenticated';

    },
    logout: (state) => {
      state.status = 'not-authenticated';
      state.correo = null;
      state.password = null;
    },
    checkingCredentials: (state) => {

      state.status = 'checking';

    },

  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials} = authSlice.actions