import * as resultRepository from '../repository/result.repository.js'

export const createResult = async (req, res) => {
  const authorId = req.user.id;
    const {score, testId} = req.body
  try {
    const result =await resultRepository.create(
      score,
      authorId,
      testId 
    )
    res.status(201).json(result)
  } catch (error) {
      res.status(400).json({ msg: error.message })
  }
}