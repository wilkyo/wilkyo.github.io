import { AnswerStatus, QuizAnswer } from "../models/quiz.types";

export const makeAnswer = (answer: string) => ({
  id: answer,
  answer: atob(answer),
  status: AnswerStatus.unchecked,
});

export const randomizeAnswers = (answers: QuizAnswer[]): QuizAnswer[] => {
  // Between -0.5 and 0.5 to get a random sort
  return answers.sort(() => Math.random() - 0.5);
};

export const getAnswerStatus = (answer: QuizAnswer, correctAnswer: string) => {
  if (answer.id === correctAnswer) {
    return AnswerStatus.success;
  } else {
    return answer.status === AnswerStatus.checked
      ? AnswerStatus.error
      : AnswerStatus.unchecked;
  }
};
