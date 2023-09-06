import * as answerRepository from '../repository/answer.repository.js'

export const createAnswer = async (req, res) => {
  try {
    const {text, isCorrect, questionId} = req.body
    const question = await answerRepository.create(
      text,
      isCorrect,
      questionId
    )
    res.status(201).json(question)
  } catch (error) {
      res.status(400).json({ msg: error.message })
  }
}

export const getAnswers = async (req, res) => {
  try {
      const response = await answerRepository.findAllById(req.params.questionId);
      const filteredJson = response.map(item => ({
        text: item.text,
        isCorrect: item.isCorrect
      }));
      res.status(200).json(filteredJson)
  } catch (error) {
      res.status(500).json({ msg: error.message })
  }
}