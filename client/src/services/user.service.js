import axios  from 'axios';

export const UserService = {
  async login(data){
    const response = await axios.post('https://mern-server-ny7d.onrender.com/user/login',data)
    return response.data
  },
  async register(data){
    const response = await axios.post('https://mern-server-ny7d.onrender.com/user/sighup',data)
    return response.data
  }
}