import {createSlice} from '@reduxjs/toolkit';

const milestoneSlice = createSlice({
  name: 'contact',
  initialState: {
    mileStone: false,
    otherMilestone: false,
    milestoneData: [],
    isLoading:true
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
    }
  },
});

export const {setMileStone,setMileStoneData,setLoading,deSetLoading} = milestoneSlice.actions;
export default milestoneSlice.reducer;
