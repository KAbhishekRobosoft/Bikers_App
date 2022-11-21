import axios from 'axios';

export const register = async values => {
  try {
    const response = await axios.post(
      'https://riding-application.herokuapp.com/api/v1/register',
      {
        userName: values.userName,
        password: values.password,
        mobile: values.mobile,
        email: values.email,
        haveBike: 'yes',
      },
    );
    return response.data;
  } catch (error) {
    console.log('An error as occurred');
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
    console.log('An error as occurred');
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

export const uploadImage = async image => {
  const payload = new FormData();
  payload.append('image', image);
  console.log(payload);

  const config = {
    body: payload,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiMjMxNDU2Nzg0NSIsImlhdCI6MTY2ODgzOTQ4NywiZXhwIjoxNjY4ODQzMDg3fQ.oQb_CueCeOnLGmBafktIdC-KrdBHs2SJTWozwL6eE1A`,
    },
  };
  const response = await axios.request(
    'https://riding-application.herokuapp.com/api/v1/profileImageUpload',
    config,
  );
  return response.data;
};

export const searchServiceCenter = async value => {
  let res = await fetch(
    'https://riding-application.herokuapp.com/api/v1/dealer/searchDealers',
    {
      method: 'post',
      body: JSON.stringify({
        text:value
      }),
      headers: {
        'Content-Type':'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9iaWxlIjoiMjMxNDU2Nzg0NSIsImlhdCI6MTY2ODg1MjcwOSwiZXhwIjoxNjY4ODU2MzA5fQ.QwY9IMuAeqL6osE1zfY2Vb4C3C95SPOMjC_H4gwFXs4`,
      },
    },
  );
  let data = await res.json();
  return data;
};
