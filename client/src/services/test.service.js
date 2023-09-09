import axios  from 'axios';

export const TestService = {
  async getAll(){
    const response = await axios.get('http://localhost:5000/tests')
    return response.data
  },
  async getById(id){
    const response = await axios.get(`http://localhost:5000/test/${id}`)
    return response.data
  }
}