import axios from 'axios';
const BASE_URL = 'https://riding-application.herokuapp.com/api/v1';

export const register = async (values, haveBike) => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/register',
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
      'https://riding-application.herokuapp.com/api/v1/loginPhone',
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

export const refreshToken = async token => {
  let res = await fetch(
    'https://riding-application.herokuapp.com/api/v1/getAccessToken',
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

export const searchServiceCenter = async (value, key) => {
  let res = await fetch(
    'https://riding-application.herokuapp.com/api/v1/dealer/searchDealers',
    {
      method: 'post',
      body: JSON.stringify({
        text: value,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
    },
  );
  let data = await res.json();
  return data;
};

export const uploadImage = async (payload, token) => {
  let res = await fetch(
    'https://riding-application.herokuapp.com/api/v1/profileImageUpload',
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
      'https://riding-application.herokuapp.com/api/v1/sendOtp',
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
      'https://riding-application.herokuapp.com/api/v1/verifyOtp',
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
      'https://riding-application.herokuapp.com/api/v1/forgotPassword',
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
      'https://riding-application.herokuapp.com/api/v1/trip/getTrip',
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
      'https://riding-application.herokuapp.com/api/v1/owner/addOwnerDetails',
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
    console.log('Error Occured');
  }
};

export const getOwnerDetails = async token => {
  try {
    const response = await axios.get(
      'https://riding-application.herokuapp.com/api/v1/owner/getOwnerDetails',
      {
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiOTk5OTk5OTk5OSIsImlhdCI6MTY2OTM1NjU1NSwiZXhwIjoxNjY5MzYwMTU1fQ.rT4ZN_c42WuOOG2vchzy5GZTGDBjA7Wdi7WJE5HtOeg'}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    //console.log('Error Occured');
  }
};

export const updateOwnerDetails = async (values, token) => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/owner/updateOwnerDetails',
      {
        city: values.city,
        state: values.state,
        doorNumber: values.doorNumber,
        pincode: values.pincode,
      },
      {
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiOTk5OTk5OTk5OSIsImlhdCI6MTY2OTM1NjU1NSwiZXhwIjoxNjY5MzYwMTU1fQ.rT4ZN_c42WuOOG2vchzy5GZTGDBjA7Wdi7WJE5HtOeg'}`,
        },
      },
    );
    console.log('res', response.data);
  } catch (error) {
    console.log('Error Occured');
  }
};

export const addBikeDetails = async (values, token) => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/bike/addBike',
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
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiNzAyNjMyNDE4NyIsImlhdCI6MTY2OTQ0NjY3OCwiZXhwIjoxNjY5NDUwMjc4fQ.vyrl4MNGnggX8j7u_C8JjrgflpnWZ2uLmbwz3j9e_Dc'}`,
        },
      },
    );

    console.log(response.data);
  } catch (error) {
    console.log('Error Occured');
  }
};
export const getBikeDetails = async token => {
  try {
    const response = await axios.get(
      'https://riding-application.herokuapp.com/api/v1/bike/getBikeDetails',
      {
        headers: {
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiNzAyNjMyNDE4NyIsImlhdCI6MTY2OTQ0NjY3OCwiZXhwIjoxNjY5NDUwMjc4fQ.vyrl4MNGnggX8j7u_C8JjrgflpnWZ2uLmbwz3j9e_Dc'}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Occured in get Bike details');
  }
};

export const createTrip = async (obj, token) => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/trip/createTrip',
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
export const searchProducts = async (value,token) => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/product/searchProducts',
      {
        text: value,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data.products;
  } catch (error) {
    console.log('Error Occured in searchProducts of accssories ');
  }
};

export const LikeProducts = async (value,token) => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/product/addLike',
      {
        _id: value,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Occured in like products');
  }
};

export const getLocationName = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2dff1a0f7576b6388c89a15bc5a40171`,
  );
  return response.data;
};

export const UserTrips = async key => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/trip/searchTrip',
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
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/trip/searchTrip',
      {
        text: value,
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

export const SearchAllUserTrips = async (key) => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/trip/searchAllTrips',
      {
        text:'',
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

export const SearchAllUserInputTrips = async (key, value) => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/trip/searchAllTrips',
      {
        text: value,
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

export const deleteTrip = async (id, key) => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/trip/deleteTrip',
      {
        _id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log('delete trip error occurred');
  }
};

export const BookService = async (key, value) => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/service/bookService',
      {
        vehicleNumber: value.vehicleNumber,
        serviceType: value.serviceType,
        slotDate: value.slotDate,
        time: value.time,
        dealer: value.dealer,
        city: value.city,
        comments: value.comments,
        dealerPhoneNumber: value.dealerPhoneNumber,
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log('error in book service');
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
    console.log('Book Service error occurred');
    console.log(err);
  }
};

export const editProfileuserName = async (token, userName) => {
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

export const editAboutUser = async (token, aboutUser) => {
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

export const editProfile = async (token, obj) => {
  try {
    const response = await axios.post(
      BASE_URL + '/editProfile',
      {
        userName: obj.userName,
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

export const uploadProfileImage = async (payload, token) => {
  let res = await fetch(
    BASE_URL+'/editProfile/image',
    {
      method: 'post',
      body: payload,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  let data = await res.json();
  console.log(data)
}
  // return data;
export const getAllService = async token => {
  try {
    const response = await axios.get(BASE_URL + '/service/getAllService', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.serviceDetails;
  } catch (err) {
    console.log('error occurred in get all service');
  }
};

export const getParticularService = async (key, id) => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/service/getParticularService',
      {
        _id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      },
    );
    return response.data
  } catch (err) {
    console.log('error occured in get particular service');
  }
};
