import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { TestService } from "../services/test.service";
import { useParams } from "react-router-dom";
import styles from "./Test.module.css";
import { Header } from "../components/header/Header";
import Question from "./questionForm/QuestionForm";

function Test() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["test"], () => TestService.getById(id));

  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleCorrectAnswer = () => {
    setCorrectAnswersCount((count) => count + 1);
  };

  if (isLoading) return <p>loading....</p>;

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
            />
          ))
        ) : (
          <p>There are no tests</p>
        )}
        <p>Total Correct Answers: {correctAnswersCount}</p>
      </div>
    </div>
  );
}

export default Test;
