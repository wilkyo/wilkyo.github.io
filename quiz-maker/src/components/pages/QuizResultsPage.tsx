import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_QUIZ } from "../../App";
import {
  AnswerStatus,
  QuizAnswer,
  QuizQuestion,
} from "../../shared/quiz.types";
import { QuizContext } from "../QuizContextProvider";
import { QuizQuestionView } from "../QuizQuestionView/QuizQuestionView";
import { QuizScore } from "../QuizScore/QuizScore";
import "./QuizResultsPage.scss";

export const QuizResultsPage: FunctionComponent = () => {
  const [score, setScore] = useState<number>();
  const { questions, setQuestions } = useContext(QuizContext);
  const navigate = useNavigate();

  useEffect(() => {
    setScore(
      questions.filter(
        (question: QuizQuestion) =>
          !question.answers.find(
            (answer: QuizAnswer) => answer.status === AnswerStatus.error
          )
      ).length
    );
  }, [questions]);

  const handleOnClickCreate = () => {
    setQuestions([]);
    navigate(ROUTE_QUIZ);
  };

  return (
    <>
      <h1>Results</h1>
      <div className="questions">
        {questions.map((question: QuizQuestion) => (
          <QuizQuestionView key={question.question} question={question} />
        ))}
      </div>
      {score !== undefined && <QuizScore score={score} />}
      <div className="create-new-button">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleOnClickCreate}
        >
          Create a new quiz
        </button>
      </div>
    </>
  );
};
