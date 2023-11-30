import { FunctionComponent, useContext, useState } from "react";
import {
  DEFAULT_CATEGORY,
  DIFFICULTIES_OPTIONS,
  OpenTdbData,
  OpenTdbResult,
  QuizCategory,
  QuizQuestion,
} from "../shared/types";
import { QuizChooser } from "./QuizChooser";
import { QuizContext } from "./QuizContextProvider";

export const QuizMakerPage: FunctionComponent = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<QuizCategory>(DEFAULT_CATEGORY);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(
    DIFFICULTIES_OPTIONS[0]
  );

  const { questions, setQuestions } = useContext(QuizContext);

  // TODO
  const randomizeAnswers = (answers: string[]): string[] => {
    return answers;
  };

  const handleFetchedDataQuestions = (data: OpenTdbData) => {
    if (data.response_code === 0) {
      const questionsFetched: QuizQuestion[] = [
        ...data.results.map((res: OpenTdbResult) => ({
          question: res.question,
          correctAnswer: res.correct_answer,
          answers: randomizeAnswers([
            res.correct_answer,
            ...res.incorrect_answers,
          ]),
        })),
      ];
      setQuestions(questionsFetched);
    }
  };

  const handleOnClickCreate = () => {
    if (
      selectedCategory !== DEFAULT_CATEGORY &&
      selectedDifficulty !== DIFFICULTIES_OPTIONS[0]
    ) {
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

  return (
    <>
      <h1>QUIZ MAKER</h1>
      <QuizChooser
        selectedCategory={selectedCategory}
        onChangeCategory={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        onChangeDifficulty={setSelectedDifficulty}
        onClickCreate={handleOnClickCreate}
      />
      {questions.map((question: QuizQuestion) => (
        <div key={question.question}>
          {atob(question.question)}
          <div>
            {question.answers.map((answer: string) => (
              <button key={answer} onClick={() => console.log(answer)}>
                {atob(answer)}
              </button>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
