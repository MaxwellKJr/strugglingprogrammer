import React, { useState } from "react";
import "./Services.css";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questionsAndAnswers: Question[] = [
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
  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});

  return (
    <>
      <h2>Frequently Asked Questions</h2>
      <div className="questions-container">
        {questionsAndAnswers.map((question) => (
          <div className="question-card" key={question.id}>
            <h4
              className="question"
              onClick={() =>
                setIsOpen((prevOpen) => ({
                  ...prevOpen,
                  [question.id]: !prevOpen[question.id],
                }))
              }
            >
              {question.question}{" "}
              {isOpen[question.id] ? <span>-</span> : <span>+</span>}
            </h4>
            {isOpen[question.id] ? (
              <p className="answer">{question.answer}</p>
            ) : (
              <p className="answer hidden">{question.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
