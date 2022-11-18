import {createSlice} from '@reduxjs/toolkit';

const authenticateSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    isLoading: true,
    infoPage:true,
    userToken:null,
    mileStone:false,
    mileStoneData:[]
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
    },
    setMileStone:(state,action)=>{
      state.mileStone=action.payload
    },
    setMileStoneData:(state,action)=>{
      state.mileStoneData.push(action.payload)
      console.log(state.mileStoneData);
    },
  },
});

export const {login,logOut,setToken,setMileStone,setMileStoneData} = authenticateSlice.actions;
export default authenticateSlice.reducer;
