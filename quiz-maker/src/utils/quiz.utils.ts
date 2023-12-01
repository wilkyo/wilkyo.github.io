import { AnswerStatus, QuizAnswer } from "../models/quiz.types";

/**
 * Converts Base64 encoded bytes to percent-encoding, and then get the original string.
 * Manages the Unicode characters atob cannot.
 */
export const decodeBase64WithUnicode = (encodedString: string): string => {
  // escape is deprecated in this: decodeURIComponent(escape(atob(encodedString)));
  const percentEncodedStr = atob(encodedString)
    .split("")
    .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
    .join("");

  return decodeURIComponent(percentEncodedStr);
};

export const makeAnswer = (answer: string) => ({
  id: answer,
  answer: decodeBase64WithUnicode(answer),
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
