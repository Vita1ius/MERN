// Question.js
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styles from "./QuestionForm.module.css";
import { AnswersService } from "../../../services/answer.service";


function Question({ question, onCorrectAnswer, isTestCompleted }) {
  const { data, isLoading } = useQuery([`question-${question.id}`], () =>
    AnswersService.getById(question.id)
    
  );

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCheckButtonVisible, setIsCheckButtonVisible] = useState(true);
  const [isCheckButtonClicked, setIsCheckButtonClicked] = useState(false);

  const handleAnswerChange = (event) => {
    if (!isCheckButtonClicked && !isTestCompleted) {
      setSelectedAnswer(event.target.value);
    }
  };

  const handleCheckAnswers = () => {
    if (selectedAnswer && !isCheckButtonClicked && !isTestCompleted) {
      const answer = data.find((a) => a.text === selectedAnswer);
      if (answer && answer.isCorrect) {
        onCorrectAnswer();
      }
      setIsCheckButtonVisible(false);
      setIsCheckButtonClicked(true);
    }
  };

  if (isLoading) return <p>Loading....</p>;

  return (
    <div className={styles.answerForm}>
      <h2>{question.text}</h2>
      {data.length ? (
        data.map((answer) => (
          <div key={answer.text} className={styles.answerOption}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={answer.text}
              checked={selectedAnswer === answer.text}
              onChange={handleAnswerChange}
              disabled={isCheckButtonClicked || isTestCompleted}
            />
            <label htmlFor={`answer`}>{answer.text}</label>
          </div>
        ))
      ) : (
        <p>There are no answers</p>
      )}
      {isCheckButtonVisible && !isTestCompleted && (
        <button onClick={handleCheckAnswers}>Submit</button>
      )}
    </div>
  );
}

export default Question;
