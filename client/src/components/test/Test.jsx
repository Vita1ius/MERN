// Test.js
import React, { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { TestService } from "../../services/test.service";
import { useParams } from "react-router-dom";
import styles from "./Test.module.css";
import { Header } from "../header/Header";
import Question from "./questionForm/QuestionForm";
import { useMutation } from "@tanstack/react-query";
import { ResultService } from "../../services/result.service";
import { AuthContext } from '../../providers/AuthProvider';

function Test() {
  const { id } = useParams();
  const { data, isLoading } = useQuery([`test-${id}`], () => TestService.getById(id));

  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  const handleCorrectAnswer = () => {
    setCorrectAnswersCount((count) => count + 1);
  };

  const {user} = useContext(AuthContext)
  const {mutate} = useMutation([`result-${id}`],
  (data) => ResultService.createResult(data,user.token), {
    onSuccess: (data) => {
      setIsTestCompleted(true);
    },
    onError: (error) => {
    },
  })

  const handleFinishTest = () => {
    const data= {
      "testId": id,
      "score": correctAnswersCount
    }
    mutate(data)
  };

  if (isLoading) return <p>Завантаження....</p>;

  return (
    <div>
      <Header />
      <div className={styles.info}>
        <h2>{data.name}</h2>
        <p>*description*</p>
        <p>{data.description}</p>
        {data.question.length ? (
          data.question.map((question) => (
            <Question
              key={question.id}
              question={question}
              onCorrectAnswer={handleCorrectAnswer}
              isTestCompleted={isTestCompleted} // Передача стану isTestCompleted
            />
          ))
        ) : (
          <p>Тестів не знайдено</p>
        )}
        {isTestCompleted ? (
          <p>Тест завершено. Правильних відповідей: {correctAnswersCount}</p>
        ) : (
          <button className={styles.completeTest} onClick={handleFinishTest}>Завершити тест</button>
        )}
      </div>
    </div>
  );
}

export default Test;
