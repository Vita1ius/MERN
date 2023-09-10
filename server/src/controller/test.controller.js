import * as testController from '../repository/test.repository.js'


export const createUser = async (req, res) => {
  try {
    const authorId = req.user.id;
    const {name, description} = req.body
    const test = await testController.create(
      name,
      description,
      authorId
    )
    res.status(201).json(test)
  } catch (error) {
      res.status(400).json({ msg: error.message })
  }
}

export const getTests = async (req, res) => {
  try {
      const response = await testController.findAll();
      res.status(200).json(response)
  } catch (error) {
      res.status(500).json({ msg: error.message })
  }
}

export const getTestsByAuthorId = async (req, res) => {
  try {
      const response = await testController.findByAuthorId(req.user.id);
      res.status(200).json(response)
  } catch (error) {
      res.status(500).json({ msg: error.message })
  }
}

export const getTestById = async (req, res) => {
  try {
      const response = await testController.findById(req.params.id);
      res.status(200).json(response)
  } catch (error) {
      res.status(500).json({ msg: error.message })
  }
}

export const deleteTest = async (req, res) => {
  try {
      const test = await testController.deleteTest(req.params.id)
      res.status(200).json(test)
  } catch (error) {
      res.status(400).json({ msg: error.message })
  }
}