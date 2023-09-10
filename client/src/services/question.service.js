import axios  from 'axios';

export const QuestionService = {
  async createQuestion(data) {
    try {
      const response = await axios.post('https://mern-server-ny7d.onrender.com/question/create',data);
      return response.data;
    } catch (error) {
      console.log('Помилка під час виконання запиту:', error);
    }
  },
}