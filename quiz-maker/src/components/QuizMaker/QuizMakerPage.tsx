import { FormEvent, FunctionComponent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_RESULTS } from "../../App";
import {
  AnswerStatus,
  DEFAULT_CATEGORY,
  DIFFICULTIES_OPTIONS,
  QuizAnswer,
  QuizCategory,
  QuizQuestion,
} from "../../models/quiz.types";
import { getAnswerStatus } from "../../utils/quiz.utils";
import { useQuestions } from "../hooks/useQuestions";
import { QuizQuestionView } from "../shared/QuizQuestionView/QuizQuestionView";
import { QuizChooser } from "./QuizChooser";
import "./QuizMakerPage.scss";

export const QuizMakerPage: FunctionComponent = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<QuizCategory>(DEFAULT_CATEGORY);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(
    DIFFICULTIES_OPTIONS[0]
  );

  const { questions, setQuestions, fetchQuestions } = useQuestions();
  const navigate = useNavigate();

  const handleOnClickCreate = () => {
    // Both select input have been selected
    if (
      selectedCategory !== DEFAULT_CATEGORY &&
      selectedDifficulty !== DIFFICULTIES_OPTIONS[0]
    ) {
      fetchQuestions(selectedCategory.id, selectedDifficulty.toLowerCase());
    }
  };

  const handleOnClickAnswer = (question: QuizQuestion, answer: QuizAnswer) => {
    const newQuestions = [...questions];
    // Foreach to keep the order
    newQuestions.forEach((newQuestion: QuizQuestion) => {
      if (newQuestion.id === question.id) {
        // Only one answer at a time...
        newQuestion.answers = [
          ...newQuestion.answers.map((newAnswer: QuizAnswer) => ({
            ...newAnswer,
            status:
              // ... so we uncheck the others or this one if it was checked
              newAnswer.id === answer.id &&
              answer.status === AnswerStatus.unchecked
                ? AnswerStatus.checked
                : AnswerStatus.unchecked,
          })),
        ];
      }
    });
    setQuestions(newQuestions);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Updates the answers' status of each question
    setQuestions([
      ...questions.map((question: QuizQuestion) => ({
        ...question,
        answers: [
          ...question.answers.map((answer: QuizAnswer) => ({
            ...answer,
            status: getAnswerStatus(answer, question.correctAnswer),
          })),
        ],
      })),
    ]);

    navigate(ROUTE_RESULTS);
  };

  // If all the questions have at least one checked answer
  const isFormValid = useMemo(() => {
    return (
      questions.length > 0 &&
      questions.filter((newQuestion: QuizQuestion) =>
        newQuestion.answers.find(
          (newAnswer: QuizAnswer) => newAnswer.status === AnswerStatus.checked
        )
      ).length === questions.length
    );
  }, [questions]);

  return (
    <>
      <h1>Quiz Maker</h1>
      <form onSubmit={handleOnSubmit}>
        <QuizChooser
          selectedCategory={selectedCategory}
          onChangeCategory={setSelectedCategory}
          selectedDifficulty={selectedDifficulty}
          onChangeDifficulty={setSelectedDifficulty}
          onClickCreate={handleOnClickCreate}
        />
        <div className="questions">
          {questions.map((question: QuizQuestion) => (
            <QuizQuestionView
              key={question.id}
              question={question}
              onClickAnswer={handleOnClickAnswer}
            />
          ))}
        </div>
        {isFormValid && (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        )}
      </form>
    </>
  );
};
