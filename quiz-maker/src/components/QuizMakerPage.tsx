import { FunctionComponent, useEffect, useState } from "react";

interface CategoriesData {
  trivia_categories: TriviaCategory[];
}

interface TriviaCategory {
  id: number;
  name: string;
}

const DEFAULT_CATEGORY: TriviaCategory = { id: -1, name: "Select a category" };

export const QuizMakerPage: FunctionComponent = () => {
  const [categoriesOptions, setCategoriesOptions] = useState<TriviaCategory[]>([
    DEFAULT_CATEGORY,
  ]);
  const difficultiesOptions = ["Select difficulty", "Easy", "Medium", "Hard"];

  const handleFetchedDataCategories = (data: CategoriesData) => {
    setCategoriesOptions([DEFAULT_CATEGORY, ...data.trivia_categories]);
  };

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response: Response) => response.json())
      .then((data: CategoriesData) => handleFetchedDataCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>QUIZ MAKER</h1>
      <div>
        <select id="categorySelect">
          {categoriesOptions.map((option: TriviaCategory) => (
            <option value={option.id}>{option.name}</option>
          ))}
        </select>
        <select id="difficultySelect">
          {difficultiesOptions.map((option: string) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        <button type="button" id="createBtn">
          Create
        </button>
      </div>
    </>
  );
};
