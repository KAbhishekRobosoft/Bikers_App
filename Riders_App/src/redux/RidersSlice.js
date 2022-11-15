import {createSlice} from '@reduxjs/toolkit';

const authenticateSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: '',
    userData: {},
    isLoading: true,
  },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
    },
    logout: state => {
      state.userData = null;
      state.isLoading = false;
    },
  },
});

export const {login, logout} = authenticateSlice.actions;
export default authenticateSlice.reducer;
