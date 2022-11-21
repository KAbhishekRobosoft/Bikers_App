import {useDrawerStatus} from '@react-navigation/drawer';
import axios from 'axios';

export const register = async (values,haveBike) => {

    try {
        const response = await axios.post(
          'https://riding-application.herokuapp.com/api/v1/register',
          {
            userName: values.userName,
            password: values.password,
            mobile:values.mobile,
            email:values.email,
            haveBike: haveBike
          },
        )
        return response.data;
      } catch (error) {
        console.log('An error has occurred');
      }
}

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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiMjMxNDU2Nzg0NSIsImlhdCI6MTY2ODg1MjcwOSwiZXhwIjoxNjY4ODU2MzA5fQ.QwY9IMuAeqL6osE1zfY2Vb4C3C95SPOMjC_H4gwFXs4`,
      },
    },
  );
  let data = await res.json();
  return data;
};
export const uploadImage= async (payload,token)=>{
  
  let res= await fetch(
      'https://riding-application.herokuapp.com/api/v1/profileImageUpload',
      {
        method:'post',
        body:payload,
        headers:{
          'Authorization': `Bearer ${token}`
        }
      })
      let data= await res.json()
      return data
}

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
