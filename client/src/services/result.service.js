import axios  from 'axios';

export const ResultService = {
  async createResult(data, token) {
    try {
      const response = await axios.post('http://localhost:5000/result/create', data, {
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
    const response = await axios.get(`http://localhost:5000/results/${id}`)
    return response.data
  }
}