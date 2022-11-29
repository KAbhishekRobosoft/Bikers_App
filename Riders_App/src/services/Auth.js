import axios from 'axios';
const BASE_URL = 'https://ride-app-node.vercel.app/api/v1';

export const register = async (values, haveBike) => {
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/register',
      {
        userName: values.userName,
        password: values.password,
        mobile: values.mobile,
        email: values.email,
        haveBike: haveBike,
      },
    );
    return response.data;
  } catch (error) {
    console.log('An error has occurred');
  }
};

export const checkIn = async values => {
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/loginPhone',
      {
        mobile: values.number,
        password: values.password,
      },
    );
    return response.data;
  } catch (error) {
    console.log('An error has occurred');
  }
};

export const refreshToken = async (token) => {

  let res = await fetch(
    'https://ride-app-node.vercel.app/api/v1/getAccessToken',
    {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  let data = await res.json();
  return data;
};

export const searchCity = async string => {
  const options = {
    method: 'GET',
    url: 'https://api.foursquare.com/v3/autocomplete',
    params: {query: string, types: 'geo'},
    headers: {
      accept: 'application/json',
      Authorization: 'fsq3bs1KJk7+sul9f1yrbZnFuyGX1D8+TIWyM0HzJ+3ZbxU=',
    },
  };
  const response = await axios.request(options);
  return response.data.results;
};

export const searchServiceCenter = async (value, token) => {
  let res = await fetch(
    'https://ride-app-node.vercel.app/api/v1/dealer/searchDealers',
    {
      method: 'post',
      body: JSON.stringify({
        text: value,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiMTIzNDU2Nzg5MCIsImlhdCI6MTY2OTE5NzAwNCwiZXhwIjoxNjY5MjAwNjA0fQ.-wJhsRsUFo5fh0Okp0BdeqUR3OE8vJKcPiQz-T8Ds1E'}`,
      },
    },
  );
  let data = await res.json();
  return data;
};

export const uploadImage = async (payload, token) => {
  let res = await fetch(
    'https://ride-app-node.vercel.app/api/v1/profileImageUpload',
    {
      method: 'post',
      body: payload,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  let data = await res.json();
  return data;
};

export const sendOtp = async mobileNumber => {
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/sendOtp',
      {
        destination: mobileNumber,
      },
    );
    console.log(response.data);
  } catch (error) {
    console.log('Error Occured');
  }
};

export const verifyOtp = async otp => {
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/verifyOtp',
      {
        otp: otp,
      },
    );
    return response.data.message;
  } catch (error) {
    console.log('Error Occured');
  }
};

export const resetPassword = async userData => {
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/forgotPassword',
      {
        mobile: userData.mobile,
        password: userData.password,
      },
    );
    return response.data;
  } catch (error) {
    console.log('An error has occurred');
  }
};

export const allTripDetails = async token => {
  try {
    const response = await axios.get(
      'https://ride-app-node.vercel.app/api/v1/trip/getTrip',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const addOwnerDetails = async (values, token) => {
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/owner/addOwnerDetails',
      {
        lisenceNumber: values.lisenceNumber,
        city: values.city,
        state: values.state,
        doorNumber: values.doorNumber,
        pincode: values.pincode,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(response.data);
  } catch (error) {
    console.log('Error Occured in adding owner Details');
  }
};

export const getOwnerDetails = async token => {
  try {
    const response = await axios.get(
      'https://ride-app-node.vercel.app/api/v1/owner/getOwnerDetails',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Occured in getting owner details');
  }
};

export const updateOwnerDetails = async (values, token) => {
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/owner/updateOwnerDetails',
      {
        city: values.city,
        state: values.state,
        doorNumber: values.doorNumber,
        pincode: values.pincode,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log('res', response.data);
  } catch (error) {
    console.log('Error Occured in updating owner Details');
  }
};

export const addBikeDetails = async (values, token) => {
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/bike/addBike',
      {
        vehicleType: values.vehicleType,
        vehicleNumber: values.vehicleNumber,
        engineNumber: values.engineNumber,
        frameNumber: values.frameNumber,
        batteryMake: values.batteryMake,
        registerNumber: values.registerNumber,
        model: values.model,
        color: values.color,
        dealerCode: values.dealerCode,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log(response.data);
  } catch (error) {
    console.log('Error Occured in adding Bike Details');
  }
};
export const getBikeDetails = async token => {
  try {
    const response = await axios.get(
      'https://ride-app-node.vercel.app/api/v1/bike/getBikeDetails',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Occured in getting Bike Details');
  }
};

export const createTrip = async (obj, token) => {
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/trip/createTrip',
      obj,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Occured');
  }
};

export const getCoordinates = async place => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=2dff1a0f7576b6388c89a15bc5a40171`,
  );
  return response.data.coord;
};



export const getSortedTripDetails = async token => {
  try {
    const response = await axios.get(BASE_URL + '/trip/getTrip', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const searchProducts = async value => {
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/product/searchProducts',
      {
        text: value,
      },
      {
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiNzAyNjMyNDE4NyIsImlhdCI6MTY2OTI4OTAxMiwiZXhwIjoxNjY5MjkyNjEyfQ.P7B188BFv4PbdyuH5-vfiXuISXPro5MeHtrPJZM1S8M'}`,
        },
      },
    );
    return response.data.products;
  } catch (error) {
    console.log('Error Occured');
  }
};

export const LikeProducts = async value => {
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/product/addLike',
      {
        _id: value,
      },
      {
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiNzAyNjMyNDE4NyIsImlhdCI6MTY2OTI4OTAxMiwiZXhwIjoxNjY5MjkyNjEyfQ.P7B188BFv4PbdyuH5-vfiXuISXPro5MeHtrPJZM1S8M'}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Occured');
  }
};

export const getLocationName = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2dff1a0f7576b6388c89a15bc5a40171`,
  );
  return response.data;
};

export const UserTrips = async key => {
  console.log('key', key);
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/trip/searchTrip',
      {
        text: '',
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log('error occurred');
  }
};

export const SearchUserTrips = async (key, value) => {
  console.log('key', key);
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/trip/searchTrip',
      {
        text: value,
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      },
    );
    console.log('usertripssss', response.data);
    return response.data;
  } catch (err) {
    console.log('error occurred');
  }
};

export const deleteTrip = async (id, key) => {
  try {
    const response = await axios.post(
      'https://ride-app-node.vercel.app/api/v1/trip/deleteTrip',
      {
        _id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      },
    );
    console.log('delete tripssss', response.data);
    return response.data;
  } catch (err) {
    console.log('delete trip error occurred');
  }
};

export const profileData = async (token, mobile) => {
  try {
    const response = await axios.post(
      BASE_URL + '/getProfile',
      {
        mobile: mobile, 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const editProfileuserName = async (token,userName) => {
  try {
    const response = await axios.post(
      BASE_URL + '/editProfile',
      {
        userName: userName, 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const editAboutUser = async (token,aboutUser) => {
  try {
    const response = await axios.post(
      BASE_URL + '/editProfile',
      {
        aboutUser: aboutUser, 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const editProfile = async (token,obj) => {
  try {
    const response = await axios.post(
      BASE_URL + '/editProfile',
      {
        userName:obj.userName,
        aboutUser: obj.aboutUser, 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
