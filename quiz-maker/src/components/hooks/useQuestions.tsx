import { useContext } from "react";
import { OpenTdbData, OpenTdbResult } from "../../models/quiz.types";
import { makeAnswer, randomizeAnswers } from "../../utils/quiz.utils";
import { QuizContext } from "../QuizContextProvider";

/**
 * Fetches the questions on demand and stores them into the Context
 * @returns The questions and the fetching function
 */
export const useQuestions = () => {
  const { questions, setQuestions } = useContext(QuizContext);

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

  const fetchQuestions = (
    selectedCategoryId: number,
    selectedDifficulty: string
  ) => {
    // Fetch in base64 to avoid encoding problems
    fetch(
      `https://opentdb.com/api.php?amount=5&category=${selectedCategoryId}&difficulty=${selectedDifficulty}&type=multiple&encode=base64`
    )
      .then((response: Response) => response.json())
      .then((data: OpenTdbData) => handleFetchedDataQuestions(data))
      .catch((error) => console.error(error));
  };

  return { questions, setQuestions, fetchQuestions };
};
