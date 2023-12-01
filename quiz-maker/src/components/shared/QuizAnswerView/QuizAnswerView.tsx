import { FunctionComponent } from "react";
import { AnswerStatus, QuizAnswer } from "../../../models/quiz.types";
import "./QuizAnswerView.scss";

interface QuizAnswerViewProps {
  answer: QuizAnswer;
  onClickAnswer: (clickedAnswer: QuizAnswer) => void;
}

export const QuizAnswerView: FunctionComponent<QuizAnswerViewProps> = ({
  answer,
  onClickAnswer,
}) => {
  const buttonClassName = () => {
    switch (answer.status) {
      case AnswerStatus.checked:
        return "primary";
      case AnswerStatus.success:
        return "success";
      case AnswerStatus.error:
        return "danger";
      case AnswerStatus.unchecked:
      default:
        return "light";
    }
  };

  return (
    <button
      type="button"
      className={`btn btn-${buttonClassName()} answer-button`}
      onClick={() => onClickAnswer(answer)}
    >
      {answer.answer}
    </button>
  );
};
