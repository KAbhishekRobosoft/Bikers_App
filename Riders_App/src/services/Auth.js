import axios from 'axios';

export const register = async (values) => {
    try {
        const response = await axios.post(
          'https://riding-application.herokuapp.com/api/v1/register',
          {
            userName: values.userName,
            password: values.password,
            mobile:values.mobile,
            email:values.email,
            haveBike: 'yes'
          },
        );
        return response.data;
      } catch (error) {
        console.log('An error as occurred');
      }
}

export const searchCity = async (string) => {

  const options = {
    method: 'GET',
    url: 'https://api.foursquare.com/v3/autocomplete',
    params: {query: string, types: 'geo'},
    headers: {
      accept: 'application/json',
      Authorization: 'fsq3bs1KJk7+sul9f1yrbZnFuyGX1D8+TIWyM0HzJ+3ZbxU='
    }
  };
  const response = await axios.request(options)

  return response.data.results

  

}
