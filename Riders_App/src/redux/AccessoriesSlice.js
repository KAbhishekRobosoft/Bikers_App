import {createSlice} from '@reduxjs/toolkit';
import {AccessoriesData} from '../assets/data';

const asseccoriesSlice = createSlice({
  name: 'shop',
  initialState: {
    accessoriesData: AccessoriesData,
    filterAccessoriesData: AccessoriesData,
    bikeType: [],
    allBikeData: [],
    fliteredBikeData: [],
  },

  reducers: {
    selectLiked: (state, action) => {
      state.accessoriesData = state.accessoriesData.map(ele => {
        if (ele.id === action.payload.id) {
          return {
            ...ele,
            id: action.payload.id,
            photo: action.payload.photo,
            title: action.payload.title,
            cost: action.payload.cost,
            liked: true,
            date: action.payload.date,
          };
        }
        return ele;
      });
      state.filterAccessoriesData = state.filterAccessoriesData.map(ele => {
        if (ele.id === action.payload.id) {
          return {
            ...ele,
            id: action.payload.id,
            photo: action.payload.photo,
            title: action.payload.title,
            cost: action.payload.cost,
            liked: true,
            date: action.payload.date,
          };
        }
        return ele;
      });
    },
    selectUnLiked: (state, action) => {
      state.accessoriesData = state.accessoriesData.map(ele => {
        if (ele.id === action.payload.id) {
          return {
            ...ele,
            id: action.payload.id,
            photo: action.payload.photo,
            title: action.payload.title,
            cost: action.payload.cost,
            liked: false,
            date: action.payload.date,
          };
        }
        return ele;
      });
      state.filterAccessoriesData = state.filterAccessoriesData.map(ele => {
        if (ele.id === action.payload.id) {
          return {
            ...ele,
            id: action.payload.id,
            photo: action.payload.photo,
            title: action.payload.title,
            cost: action.payload.cost,
            liked: false,
            date: action.payload.date,
          };
        }
        return ele;
      });
    },
    filterAccessories: (state, action) => {
      state.accessoriesData = state.filterAccessoriesData.filter(site =>
        site.title.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    addBikeType: (state, action) => {
      state.bikeType = action.payload;
    },
    addBikeData: (state, action) => {
      state.allBikeData = action.payload;
      state.fliteredBikeData = action.payload;
    },
    fliteredBikeDetails: (state, action) => {
      state.allBikeData = state.fliteredBikeData.filter(
        ele => ele.vehicleType === action.payload, 

      );
    
    },
  },
});
export const {
  selectLiked,
  selectUnLiked,
  filterAccessories,
  addBikeType,
  addBikeData,
  fliteredBikeDetails,
} = asseccoriesSlice.actions;
export default asseccoriesSlice.reducer;
