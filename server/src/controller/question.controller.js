import * as questionRepository from '../repository/question.repository.js'

export const createQuestion = async (req, res) => {
  try {
    const {text, type, testId} = req.body
    const question = await questionRepository.create(
      text,
      type,
      testId
    )
    res.status(201).json(question)
  } catch (error) {
      res.status(400).json({ msg: error.message })
  }
}

export const getAnswers = async (req, res) => {
  try {
      const response = await questionRepository.findAllById(req.params.id);
      res.status(200).json(response)
  } catch (error) {
      res.status(500).json({ msg: error.message })
  }
}