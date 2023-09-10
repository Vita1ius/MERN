import axios  from 'axios';

export const AnswersService = {
  async getById(id){
    const response = await axios.get(`https://mern-server-ny7d.onrender.com/answers/${id}`)
    return response.data
  },
  async createAnswer(data) {
    try {
      const response = await axios.post('https://mern-server-ny7d.onrender.com/answer/create',data);
      return response.data;
    } catch (error) {
      console.log('Помилка під час виконання запиту:', error);
    }
  }
}