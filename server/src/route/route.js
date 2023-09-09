import { Router } from "express";
const router = Router();
import * as userController from '../controller/user.controller.js';
import * as testController from '../controller/test.controller.js'
import * as questionController from '../controller/question.controller.js'
import * as answerController from '../controller/answer.controller.js'
import * as resultController from '../controller/result.controller.js'
import { authenticated } from "../middleware/auth.middleware.js";

router.get('/users',authenticated, userController.getUSers)
router.post('/user/login', userController.login)
router.post('/user/sighup', userController.createUser)
router.delete('/user', userController.deleteUser)

router.get('/tests', testController.getTests)
router.get('/test/:id', testController.getTestById)
router.post('/test/create',authenticated, testController.createUser)
router.delete('/test/:id', testController.deleteTest)

router.post('/question/create', questionController.createQuestion)

router.get('/answers/:questionId', answerController.getAnswers)
router.post('/answer/create', answerController.createAnswer)

router.post('/result/create',authenticated, resultController.createResult)

export default router;