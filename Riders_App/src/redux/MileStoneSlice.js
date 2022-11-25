import {createSlice} from '@reduxjs/toolkit';

const milestoneSlice = createSlice({
  name: 'contact',
  initialState: {
    mileStone: false,
    otherMilestone: false,
    milestoneData: [],
    isLoading:true,
    setTo: 'Where do you want to go?',
    storeTrip: {},
  },

  reducers: {
    setMileStone: (state, action) => {
      state.mileStone = action.payload;
    },
    setMileStoneData: (state, action) => {
      state.milestoneData.push(action.payload);
      state.mileStone= true
    },

    setLoading:(state)=>{
      state.isLoading= false
    },

    deSetLoading:(state)=>{
      state.isLoading= true
    },
    whereTo: (state, action) => {
      state.setTo = action.payload;
    },
    tripStore: (state, action) => {
      state.storeTrip = action.payload;
    }
  },
});

export const {setMileStone,setMileStoneData,setLoading,deSetLoading, whereTo, tripStore} = milestoneSlice.actions;
export default milestoneSlice.reducer;
