import {createSlice} from '@reduxjs/toolkit';

const authenticateSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    isLoading: true,
    infoPage:true,
    userToken:null,
    otpVerified:false,
    registered:false
  },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.infoPage= false
    },

    logOut: state => {
      state.userData = null
      state.isLoading = false
      state.userToken= null
      state.otpVerified= false
    },

    setToken:(state,action)=>{
      state.userToken= action.payload
      state.isLoading= false
    },

    setOtpVerfied:(state)=>{
      state.otpVerified= true
    },

    setRegistered:(state)=>{
      state.registered= true
    },
  },
});

export const {login,logOut,setToken} = authenticateSlice.actions;
export default authenticateSlice.reducer;
