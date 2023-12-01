import { FunctionComponent } from "react";
import { QuizAnswer, QuizQuestion } from "../../shared/quiz.types";
import { QuizAnswerView } from "../QuizAnswerView/QuizAnswerView";
import "./QuizQuestionView.scss";

interface QuizQuestionViewProps {
  question: QuizQuestion;
  onClickAnswer?: (
    currentQuestion: QuizQuestion,
    clickedAnswer: QuizAnswer
  ) => void;
}

export const QuizQuestionView: FunctionComponent<QuizQuestionViewProps> = ({
  question,
  onClickAnswer,
}) => {
  return (
    <div className="quiz-question" key={question.question}>
      <span>{atob(question.question)}</span>
      <div className="quiz-answers">
        {question.answers.map((answer: QuizAnswer) => (
          <QuizAnswerView
            key={answer.id}
            answer={answer}
            onClickAnswer={(clickedAnswer: QuizAnswer) =>
              onClickAnswer && onClickAnswer(question, clickedAnswer)
            }
          />
        ))}
      </div>
    </div>
  );
};
