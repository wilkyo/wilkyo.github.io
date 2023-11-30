import { PropsWithChildren, createContext, useState } from "react";
import { DEFAULT_CATEGORY, TriviaCategory } from "../shared/types";

interface QuizContextProps {
  categories: TriviaCategory[];
  setCategories: (categories: TriviaCategory[]) => void;
}

export const QuizContext = createContext<QuizContextProps>({
  categories: [],
  setCategories: () => null,
});

export const QuizContextProvider = (
  props: PropsWithChildren<Record<never, never>>
) => {
  const [categories, setCategories] = useState<TriviaCategory[]>([
    DEFAULT_CATEGORY,
  ]);

  return (
    <QuizContext.Provider value={{ categories, setCategories }} {...props} />
  );
};
