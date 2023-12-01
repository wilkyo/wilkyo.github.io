import { FunctionComponent, useContext, useEffect, useState } from "react";
import {
  AnswerStatus,
  QuizAnswer,
  QuizQuestion,
} from "../../shared/quiz.types";
import { QuizContext } from "../QuizContextProvider";
import { QuizQuestionView } from "../QuizQuestionView/QuizQuestionView";
import { QuizScore } from "../QuizScore/QuizScore";

export const QuizResultsPage: FunctionComponent = () => {
  const [score, setScore] = useState<number>();
  const { questions } = useContext(QuizContext);

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

  return (
    <>
      <h1>Results</h1>
      <div className="questions">
        {questions.map((question: QuizQuestion) => (
          <QuizQuestionView key={question.question} question={question} />
        ))}
      </div>
      {score !== undefined && (
        <QuizScore score={score} total={questions.length} />
      )}
    </>
  );
};
