import { FunctionComponent } from "react";
import "./QuizScore.scss";

interface QuizScoreProps {
  score: number;
  total: number;
}

export const QuizScore: FunctionComponent<QuizScoreProps> = ({
  score,
  total,
}) => {
  return (
    <div className="quiz-score">{`You scored ${score} out of ${total}`}</div>
  );
};
