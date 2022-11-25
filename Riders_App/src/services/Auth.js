import {useDrawerStatus} from '@react-navigation/drawer';
import axios from 'axios';

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
  const options = {
    method: 'POST',
    url: 'https://riding-application.herokuapp.com/api/v1/getAccessToken',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.request(options);
  return response.data;
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
    'https://riding-application.herokuapp.com/api/v1/dealer/searchDealers',
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
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiOTk5OTk5OTk5OSIsImlhdCI6MTY2OTM1NjU1NSwiZXhwIjoxNjY5MzYwMTU1fQ.rT4ZN_c42WuOOG2vchzy5GZTGDBjA7Wdi7WJE5HtOeg'}`,
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
    console.log('res',response.data);
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiOTk5OTk5OTk5OSIsImlhdCI6MTY2OTM1NjU1NSwiZXhwIjoxNjY5MzYwMTU1fQ.rT4ZN_c42WuOOG2vchzy5GZTGDBjA7Wdi7WJE5HtOeg`,
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiOTk5OTk5OTk5OSIsImlhdCI6MTY2OTM1NjU1NSwiZXhwIjoxNjY5MzYwMTU1fQ.rT4ZN_c42WuOOG2vchzy5GZTGDBjA7Wdi7WJE5HtOeg`,
        },
      },
    );
    return response.data
  } catch (error) {
    console.log('Error Occured');
  }
};
