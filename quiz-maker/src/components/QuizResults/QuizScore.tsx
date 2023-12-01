import { FunctionComponent } from "react";
import "./QuizScore.scss";

interface QuizScoreProps {
  score: number;
}

export const QuizScore: FunctionComponent<QuizScoreProps> = ({ score }) => {
  const calculateClassName = () => {
    switch (score) {
      case 0:
      case 1:
        return "failure";
      case 2:
      case 3:
        return "partial";
      default:
        return "success";
    }
  };

  return (
    <div
      className={`quiz-score ${calculateClassName()}`}
    >{`You scored ${score} out of 5`}</div>
  );
};
