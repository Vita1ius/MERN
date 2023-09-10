import axios  from 'axios';

export const QuestionService = {
  async createQuestion(data) {
    try {
      const response = await axios.post('http://localhost:5000/question/create',data);
      return response.data;
    } catch (error) {
      console.log('Помилка під час виконання запиту:', error);
    }
  },
}