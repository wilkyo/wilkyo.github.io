import { AnswerStatus, QuizAnswer } from "./types";

export const makeAnswer = (answer: string) => ({
  id: answer,
  answer: atob(answer),
  status: AnswerStatus.unchecked,
});

export const randomizeAnswers = (answers: QuizAnswer[]): QuizAnswer[] => {
  // Between -0.5 and 0.5 to get a random sort
  return answers.sort(() => Math.random() - 0.5);
};
