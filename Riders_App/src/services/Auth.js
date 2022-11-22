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

export const searchServiceCenter = async value => {
  let res = await fetch(
    'https://riding-application.herokuapp.com/api/v1/dealer/searchDealers',
    {
      method: 'post',
      body: JSON.stringify({
        text: value,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiMjMxNDU2Nzg0NSIsImlhdCI6MTY2OTA5Mzk5NSwiZXhwIjoxNjY5MDk3NTk1fQ.qW_8bIj0HROjJ9SULT1nD7JTGpjV4gT84FvF8_PBx6I`,
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
  const options = {
    method: 'POST',
    url: 'https://riding-application.herokuapp.com/api/v1/sendOtp',
    body: {
      destination: mobileNumber,
    },
  };
  const response = await axios.request(options);
  return response.data;
};

export const resetPassword = async userData => {
  const options = {
    method: 'POST',
    url: 'https://riding-application.herokuapp.com/api/v1/forgotPassword',
    body: {
      mobile: userData.mobile,
      password: userData.password,
    },
  };
  const response = await axios.request(options);
  return response.data;
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

export const addOwnerDetails = async values => {
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiNzg5MDEyMzQ1NiIsImlhdCI6MTY2OTExMDM4OSwiZXhwIjoxNjY5MTEzOTg5fQ.WneV_4LS_S28QbCKg-eSGEZ97gITDZm7W_3VkrMnhkk`,
        },
      },
    );
    console.log(response.data);
  } catch (error) {
    console.log('Error Occured');
  }
};
export const getOwnerDetails = async () => {
  try {
    const response = await axios.get(
      'https://riding-application.herokuapp.com/api/v1/owner/getOwnerDetails',
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiNzg5MDEyMzQ1NiIsImlhdCI6MTY2OTExMDM4OSwiZXhwIjoxNjY5MTEzOTg5fQ.WneV_4LS_S28QbCKg-eSGEZ97gITDZm7W_3VkrMnhkk`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error Occured');
  }
};
