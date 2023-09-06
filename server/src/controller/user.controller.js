import * as userRepository from '../repository/user.repository.js'
import { hash } from '../service/password-hasher.js';
import jwt from 'jsonwebtoken';
const secretKey = 'your-secret-key';


export const getUSers = async (req, res) => {
  try {
      const response = await userRepository.findAll();
      res.status(200).json(response)
  } catch (error) {
      res.status(500).json({ msg: error.message })
  }
}

export const createUser = async (req, res) => {
  const { email,name, password } = req.body
  try {
    const hashedPassword = await hash(password);
    const user =await userRepository.create(
      email,
      name,
      hashedPassword
    )
    res.status(201).json(user)
  } catch (error) {
      res.status(400).json({ msg: error.message })
  }
}
export const deleteUser = async (req, res) => {
  try {
      const user =await userRepository.deleteUser(req.body.email)
      res.status(200).json(user)
  } catch (error) {
      res.status(400).json({ msg: error.message })
  }
}

export const login = async (req, res) => {
  const {email, password} = req.body
  const user = await userRepository.login(email);
  if(user){
    const hashedPassword = await hash(password);
    if(hashedPassword === user.password){
      const token = jwt.sign({ user }, secretKey, { expiresIn: '1h' });
      res.json({token})
    }else{
      res.status(400).json({msg: 'Wrong email or password'})
    }
  }else{
    res.status(400).json({msg: 'Wrong email or password'})
  }
}