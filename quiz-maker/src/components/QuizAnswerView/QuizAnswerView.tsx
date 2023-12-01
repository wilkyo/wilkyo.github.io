import { FunctionComponent } from "react";
import { AnswerStatus, QuizAnswer } from "../../shared/quiz.types";
import "./QuizAnswerView.scss";

interface QuizAnswerViewProps {
  answer: QuizAnswer;
  onClickAnswer: (clickedAnswer: QuizAnswer) => void;
}

export const QuizAnswerView: FunctionComponent<QuizAnswerViewProps> = ({
  answer,
  onClickAnswer,
}) => {
  const buttonStyle = () => {
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
      className={`btn btn-${buttonStyle()} answer-button`}
      onClick={() => onClickAnswer(answer)}
    >
      {answer.answer}
    </button>
  );
};
