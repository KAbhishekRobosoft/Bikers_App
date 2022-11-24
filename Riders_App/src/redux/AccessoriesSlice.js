import {createSlice} from '@reduxjs/toolkit';
import {AccessoriesData} from '../assets/data';

const asseccoriesSlice = createSlice({
  name: 'shop',
  initialState: {
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
  },
});
export const {addAccessoriesData, filterAccessories, addLiked, disLiked} =
  asseccoriesSlice.actions;
export default asseccoriesSlice.reducer;
