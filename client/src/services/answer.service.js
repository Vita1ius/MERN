import axios  from 'axios';

export const AnswersService = {
  async getById(id){
    const response = await axios.get(`http://localhost:5000/answers/${id}`)
    return response.data
  },
  async createAnswer(data) {
    try {
      const response = await axios.post('http://localhost:5000/answer/create',data);
      return response.data;
    } catch (error) {
      console.log('Помилка під час виконання запиту:', error);
    }
  }
}