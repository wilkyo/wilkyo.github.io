import { useCallback, useContext, useEffect } from "react";
import { CategoriesData, DEFAULT_CATEGORY } from "../../models/quiz.types";
import { QuizContext } from "../QuizContextProvider";

/**
 * Fetches the categories and stores them into the Context once
 * @returns The categories
 */
export const useCategories = () => {
  const { categories, setCategories } = useContext(QuizContext);

  // Memoized for useEffect usage
  const handleFetchedDataCategories = useCallback(
    (data: CategoriesData) => {
      const newCategoriesOptions = [
        DEFAULT_CATEGORY,
        ...data.trivia_categories,
      ];
      setCategories(newCategoriesOptions);
    },
    [setCategories]
  );

  useEffect(() => {
    // The default list has only one category: the placeholder
    if (categories.length === 1) {
      fetch("https://opentdb.com/api_category.php")
        .then((response: Response) => response.json())
        .then((data: CategoriesData) => handleFetchedDataCategories(data))
        .catch((error) => console.error(error));
    }
  }, [categories, handleFetchedDataCategories]);

  return { categories };
};
