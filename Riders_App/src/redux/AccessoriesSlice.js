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
<<<<<<< HEAD
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
=======
>>>>>>> de9c4b05ae1bc7321772a3a0042a90a0db0d0525
    filterAccessories: (state, action) => {
      state.accessoriesData = state.filterAccessoriesData.filter(site =>
        site.title.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
<<<<<<< HEAD
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
=======
  },
});
export const {addAccessoriesData, filterAccessories, addLiked, disLiked} =
  asseccoriesSlice.actions;
>>>>>>> de9c4b05ae1bc7321772a3a0042a90a0db0d0525
export default asseccoriesSlice.reducer;
