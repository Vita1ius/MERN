import React, { useState,useContext } from 'react';
import styles from './CreateTest.module.css'
import { Header } from '../header/Header';
import { useMutation } from "@tanstack/react-query";
import { TestService } from '../../services/test.service';
import { AuthContext } from '../../providers/AuthProvider';
import { QuestionService } from '../../services/question.service';
import { AnswersService } from '../../services/answer.service';
import { useNavigate } from 'react-router-dom';

function Questionnaire({ name, description, setName, setDescription }) {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswers, setNewAnswers] = useState([]); // Додано масив станів для відповідей
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);

  const addQuestion = () => {
    if (newQuestion.trim() !== '') {
      const newQuestionData = {
        text: newQuestion,
        answers: [],
      };
      setQuestions([...questions, newQuestionData]);
      setNewQuestion('');
      setNewAnswers([...newAnswers, '']);
      setAnswerIsCorrect(false);
    }
  };

  const addAnswer = (index) => {
    const updatedQuestions = [...questions];
    if (newAnswers[index].trim() !== '') { 
      updatedQuestions[index].answers.push({
        text: newAnswers[index],
        isCorrect: answerIsCorrect,
      });

      updatedQuestions[index].answers = updatedQuestions[index].answers.map((answer, answerIndex) => ({
        ...answer,
        isCorrect: answerIndex === updatedQuestions[index].answers.length - 1 && answer.isCorrect,
      }));

      setQuestions(updatedQuestions);
      setNewAnswers([...newAnswers]);
      setNewAnswers(newAnswers.map((answer, idx) => (idx === index ? '' : answer)));
      setAnswerIsCorrect(false);
    }
  };

  const toggleAnswerIsCorrect = (index, answerIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].answers = updatedQuestions[index].answers.map((answer, ai) => ({
      ...answer,
      isCorrect: ai === answerIndex,
    }));
    setQuestions(updatedQuestions);
  };
  const { user } = useContext(AuthContext);

const mutateQuestion = useMutation(
  (data) => QuestionService.createQuestion(data)
);

const mutateAnswer = useMutation(
  (data) => AnswersService.createAnswer(data),
);

const addAnswerToDB = (answer, id) => {
  const data = {
    "text": answer.text,
    "isCorrect": answer.isCorrect,
    "questionId": id
  }

  mutateAnswer.mutate(data);
}

const createQuestionToDB = async (quest, id) => {
  const data = {
    text: quest.text,
    type: "single",
    testId: id,
  };

  const questionData = await mutateQuestion.mutateAsync(data);

  if (quest.answers.length) {
    quest.answers.map((answer) => addAnswerToDB(answer, questionData.id));
  } else {
    console.log('No answers to create');
  }
};

const mutateTest = useMutation(
  (data) => TestService.createTest(data, user.token), {
    onSuccess: (data) => {
      if (questions.length) {
        questions.map((quest) => createQuestionToDB(quest, data.id));
      } else {
        console.log('No questions to create');
      }
    },
  }
);

const createTest = async () => {
  const data = {
    name: name,
    description: description,
  };

  await mutateTest.mutateAsync(data);


  navigate('/tests');
};

  return (
    <div className={styles.addQeustion}>
      <div>
        <h2>Add a Question</h2>
        <input
          type="text"
          placeholder="Enter your question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button onClick={addQuestion}>Add Question</button>
      </div>
      <div>
        <h2>Questions</h2>
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question.text}</p>
            <ul>
              {question.answers.map((answer, answerIndex) => (
                <li key={answerIndex}>
                  {answer.text}
                  <input
                    type="radio"
                    name={`correctAnswer${index}`}
                    checked={answer.isCorrect}
                    onChange={() => toggleAnswerIsCorrect(index, answerIndex)}
                  />
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Enter an answer"
              value={newAnswers[index]}
              onChange={(e) => {
                const updatedNewAnswers = [...newAnswers];
                updatedNewAnswers[index] = e.target.value;
                setNewAnswers(updatedNewAnswers);
              }}
            />
            <button className={styles.addButton} onClick={() => addAnswer(index)}>Add Answer</button>
          </div>
        ))}
      </div>
      <button className={styles.createButton} onClick={() => createTest()}>Створити тест</button>
    </div>
  );
}

function CreateTest() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <Header/>
      <div className={styles.infoTest}>
        <h1>Test</h1>
        <input
          type="text"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter a description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Questionnaire name={name} description={description} setName={setName} setDescription={setDescription} />
      </div>
    </div>
  );
}

export default CreateTest;
