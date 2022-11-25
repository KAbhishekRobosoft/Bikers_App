import {createSlice} from '@reduxjs/toolkit';
import {AccessoriesData} from '../assets/data';

const asseccoriesSlice = createSlice({
  name: 'shop',
  initialState: {
    bikeType: [],
    allBikeData: [],
    fliteredBikeData: [],
    accessoriesData: [],
    filterAccessoriesData: [],
  },

  reducers: {
    addAccessoriesData: (state, action) => {
      state.accessoriesData = action.payload;
      state.filterAccessoriesData = action.payload;
    },
    addLiked: (state, action) => {
      state.accessoriesData = state.accessoriesData.map(ele => {
        if (ele._id === action.payload._id) {
          return {
            ...ele,
            _id: ele._id,
            productImage: ele.productImage,
            productName: ele.productName,
            productPrice: ele.productPrice,
            likedBy: ele.likedBy,
            liked: true,
          };
        }
        return ele;
      });
    },
    disLiked: (state, action) => {
      state.accessoriesData = state.accessoriesData.map(ele => {
        if (ele._id === action.payload._id) {
          return {
            ...ele,
            _id: ele._id,
            productImage: ele.productImage,
            productName: ele.productName,
            productPrice: ele.productPrice,
            likedBy: ele.likedBy,
            liked: false,
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
  addLiked,
  disLiked,
  filterAccessories,
  addBikeType,
  addBikeData,
  fliteredBikeDetails,
} = asseccoriesSlice.actions;
export default asseccoriesSlice.reducer;
