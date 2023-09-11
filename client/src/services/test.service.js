import axios  from 'axios';

export const TestService = {
  async getAll(){
    const response = await axios.get('https://mern-server-ny7d.onrender.com/tests')
    return response.data
  },
  async getById(id){
    const response = await axios.get(`https://mern-server-ny7d.onrender.com/test/${id}`)
    return response.data
  },
  async myTests(token) {
    try {
      const response = await axios.get('https://mern-server-ny7d.onrender.com/myTests', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log('Помилка під час виконання запиту:', error);
    }
  },
  async createTest(data, token) {
    try {
      const response = await axios.post('https://mern-server-ny7d.onrender.com/test/create',data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log('Помилка під час виконання запиту:', error);
    }
  },
}