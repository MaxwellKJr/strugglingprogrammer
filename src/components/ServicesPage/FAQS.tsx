import React from "react";
import "./Services.css";

const questionsAndAnswers = [
  {
    id: 1,
    question: "What are your hours of operation?",
    answer: "We are open from 9am to 5pm Monday to Friday. Saturday and Sunday",
  },
  {
    id: 2,
    question: "What are your hours of operation?",
    answer: "We are open from 9am to 5pm Monday to Friday. Saturday and Sunday",
  },
];

export const FAQS = () => {
  return (
    <>
      <h2>Frequently Asked Questions</h2>
      <div className="questions-container">
        {questionsAndAnswers.map((question) => (
          <div className="question-card" key={question.id}>
            <h4 className="question">{question.question}</h4>
            <p className="answer">{question.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
};
