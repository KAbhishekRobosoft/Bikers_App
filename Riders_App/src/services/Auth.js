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
    console.log('user does not exist');
  }
};

export const refreshToken = async token => {

  const options = {
    method: 'POST',
    url: 'https://riding-application.herokuapp.com/api/v1/getAccessToken',
    headers: {
       Authorization: `Bearer ${token}` 
    }
  };
  const response= await axios.request(options)
  return response.data
};
