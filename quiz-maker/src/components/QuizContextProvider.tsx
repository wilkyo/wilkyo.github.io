import { PropsWithChildren, createContext, useState } from "react";
import {
  DEFAULT_CATEGORY,
  QuizCategory,
  QuizQuestion,
} from "../shared/quiz.types";

interface QuizContextProps {
  categories: QuizCategory[];
  setCategories: (categories: QuizCategory[]) => void;
  questions: QuizQuestion[];
  setQuestions: (questions: QuizQuestion[]) => void;
}

export const QuizContext = createContext<QuizContextProps>({
  categories: [],
  setCategories: () => null,
  questions: [],
  setQuestions: () => null,
});

export const QuizContextProvider = (
  props: PropsWithChildren<Record<never, never>>
) => {
  const [categories, setCategories] = useState<QuizCategory[]>([
    DEFAULT_CATEGORY,
  ]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  return (
    <QuizContext.Provider
      value={{ categories, setCategories, questions, setQuestions }}
      {...props}
    />
  );
};
