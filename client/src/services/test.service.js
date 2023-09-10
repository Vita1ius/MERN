import axios  from 'axios';

export const TestService = {
  async getAll(){
    const response = await axios.get('http://localhost:5000/tests')
    return response.data
  },
  async getById(id){
    const response = await axios.get(`http://localhost:5000/test/${id}`)
    return response.data
  },
  async myTests(token) {
    try {
      const response = await axios.get('http://localhost:5000/myTests', {
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
      const response = await axios.post('http://localhost:5000/test/create',data, {
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