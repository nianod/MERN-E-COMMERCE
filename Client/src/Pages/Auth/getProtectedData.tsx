import axios from 'axios';

export const getProtectedData = async () => {
  try {
    const token = localStorage.getItem('token');
    const apiUrl = import.meta.env.HEROKU_URL
    const response = await axios.get(`${apiUrl}/api/auth/protected`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
     
    console.log(response.data);
  } catch (err:any) {
    console.error(err.response?.data || err.message);
  }
};
