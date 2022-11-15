import axios from "axios";

export const register = async (values) => {
    
    console.log(values.userName, values.password, values.mobile, values.email)
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