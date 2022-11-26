import {createSlice} from '@reduxjs/toolkit';

const authenticateSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    userCredentials: {},
    isLoading: true,
    infoPage: true,
    userToken: null,
    otpVerified: false,
    registered: false,
    forgotPassword: false,
    image: '',
    haveBike: false,
  },

  reducers: {
    login: (state, action) => {
      state.userCredentials = action.payload;
      state.isLoading = false;
      state.infoPage = false;
      state.otpVerified = true;
      state.userToken = action.payload.token;
    },

    logOut: state => {
      state.userData = null;
      state.isLoading = false;
      state.userToken = null;
    },

    setImage: (state, action) => {
      state.image = action.payload;
    },

    setToken: (state, action) => {
      state.userToken = action.payload;
      state.isLoading = false;
    },
    setOtpVerfied: state => {
      state.otpVerified = true;
    },

    setUserData: (state, action) => {
      state.userData = action.payload;
    },

    setForgotPassword: state => {
      state.forgotPassword = true;
    },

    deSetForgotPassword: state => {
      state.forgotPassword = false;
    },

    setHaveBike: (state, action) => {
      state.haveBike = action.payload;
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
  setHaveBike,
  deSetRegistered,
  setForgotPassword,
  deSetForgotPassword,
  setUserData,
  setImage,
} = authenticateSlice.actions;
export default authenticateSlice.reducer;
