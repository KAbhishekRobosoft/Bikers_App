import {createSlice} from '@reduxjs/toolkit';

const authenticateSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    isLoading: true,
    infoPage:true,
    userToken:null
  },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
      state.isLoading = false;
      state.infoPage= false
    },

    logOut: state => {
      state.userData = null;
      state.isLoading = false;
      state.userToken= null
    },

    setToken:(state,action)=>{
      state.userToken= action.payload
      state.isLoading= false
    }
  },
});

export const {login,logOut,setToken} = authenticateSlice.actions;
export default authenticateSlice.reducer;
