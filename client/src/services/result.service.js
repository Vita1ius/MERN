import axios  from 'axios';

export const ResultService = {
  async createResult(data, token) {
    try {
      const response = await axios.post('https://mern-server-ny7d.onrender.com/result/create', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log('Помилка під час виконання запиту:', error);
    }
  },
  async getById(id){
    const response = await axios.get(`https://mern-server-ny7d.onrender.com/results/${id}`)
    return response.data
  }
}