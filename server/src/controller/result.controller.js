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

export const getResultsByTestId = async (req, res) => {
  try {
      const response = await resultRepository.findByTestId(req.params.id);
      res.status(200).json(response)
  } catch (error) {
      res.status(500).json({ msg: error.message })
  }
}