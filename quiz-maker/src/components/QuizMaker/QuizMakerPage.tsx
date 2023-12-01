import {
  FormEvent,
  FunctionComponent,
  useContext,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_RESULTS } from "../../App";
import {
  AnswerStatus,
  DEFAULT_CATEGORY,
  DIFFICULTIES_OPTIONS,
  OpenTdbData,
  OpenTdbResult,
  QuizAnswer,
  QuizCategory,
  QuizQuestion,
} from "../../models/quiz.types";
import {
  getAnswerStatus,
  makeAnswer,
  randomizeAnswers,
} from "../../utils/quiz.utils";
import { QuizContext } from "../QuizContextProvider";
import { QuizQuestionView } from "../shared/QuizQuestionView/QuizQuestionView";
import { QuizChooser } from "./QuizChooser";
import "./QuizMakerPage.scss";

export const QuizMakerPage: FunctionComponent = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<QuizCategory>(DEFAULT_CATEGORY);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(
    DIFFICULTIES_OPTIONS[0]
  );

  const { questions, setQuestions } = useContext(QuizContext);
  const navigate = useNavigate();

  /**
   * Maps the fetched data into our structure
   * @param data The data fetched by the questions' api
   */
  const handleFetchedDataQuestions = (data: OpenTdbData) => {
    if (data.response_code === 0) {
      setQuestions([
        ...data.results.map((res: OpenTdbResult) => ({
          id: res.question,
          question: atob(res.question),
          correctAnswer: res.correct_answer,
          // Answers displayed in a random order
          answers: randomizeAnswers([
            makeAnswer(res.correct_answer),
            ...res.incorrect_answers.map(makeAnswer),
          ]),
        })),
      ]);
    }
  };

  const handleOnClickCreate = () => {
    // Both select input have been selected
    if (
      selectedCategory !== DEFAULT_CATEGORY &&
      selectedDifficulty !== DIFFICULTIES_OPTIONS[0]
    ) {
      // Fetch in base64 to avoid encoding problems
      fetch(
        `https://opentdb.com/api.php?amount=5&category=${
          selectedCategory.id
        }&difficulty=${selectedDifficulty.toLocaleLowerCase()}&type=multiple&encode=base64`
      )
        .then((response: Response) => response.json())
        .then((data: OpenTdbData) => handleFetchedDataQuestions(data))
        .catch((error) => console.error(error));
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
