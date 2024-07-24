import {createSlice} from '@reduxjs/toolkit';
// import { User } from 'oidc-client-ts';

export interface AuthState {
  authentication?: string | undefined
}

const initialState: AuthState = {
  authentication: undefined
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthentication: (state: any, {payload}: any) => {
      state.authentication = payload;
    }
  }
});

export const {setAuthentication} = authSlice.actions;

export default authSlice.reducer;
