import {createSlice} from '@reduxjs/toolkit';

const authenticateSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    isLoading: true,
    infoPage: true,
    userToken: null,
    mileStone: false,
    mileStoneData: [],
    otpVerified: false,
    registered: false,
    forgotPassword: false,
  },

  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.infoPage = false;
      state.otpVerified = true;
    },

    logOut: state => {
      state.userData = null;
      state.isLoading = false;
      state.userToken = null;
    },

    setToken: (state, action) => {
      state.userToken = action.payload;
      state.isLoading = false;
    },
    setMileStone: (state, action) => {
      state.mileStone = action.payload;
    },
    setMileStoneData: (state, action) => {
      state.mileStoneData.push(action.payload);
      console.log(state.mileStoneData);
    },
    setOtpVerfied: state => {
      state.otpVerified = true;
    },

    setForgotPassword: state => {
      state.forgotPassword = true;
    },

    deSetForgotPassword: state => {
      state.forgotPassword = false;
    },

    setRegistered: state => {
      state.registered = true;
    },

    deSetRegistered: state => {
      state.registered = false;
    },
  },
});

export const {
  login,
  logOut,
  setToken,
  setOtpVerfied,
  setRegistered,
  deSetRegistered,
  setForgotPassword,
  deSetForgotPassword,
} = authenticateSlice.actions;
export default authenticateSlice.reducer;
