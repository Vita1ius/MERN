import axios  from 'axios';

export const UserService = {
  async login(data){
    const response = await axios.post('http://localhost:5000/user/login',data)
    return response.data
  },
  async register(data){
    const response = await axios.post('http://localhost:5000/user/sighup',data)
    return response.data
  }
}