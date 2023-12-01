import { FunctionComponent, useEffect, useState } from "react";
import "./QuizScore.scss";

interface QuizScoreProps {
  score: number;
}

export const QuizScore: FunctionComponent<QuizScoreProps> = ({ score }) => {
  const [stateClassName, setStateClassName] = useState("");

  useEffect(() => {
    switch (score) {
      case 0:
      case 1:
        setStateClassName("failure");
        break;
      case 2:
      case 3:
        setStateClassName("partial");
        break;
      default:
        setStateClassName("success");
        break;
    }
  }, [score]);

  return (
    <div
      className={`quiz-score ${stateClassName}`}
    >{`You scored ${score} out of 5`}</div>
  );
};
