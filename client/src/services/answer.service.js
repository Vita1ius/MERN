import axios  from 'axios';

export const AnswersService = {
  async getById(id){
    const response = await axios.get(`http://localhost:5000/answers/${id}`)
    return response.data
  }
}