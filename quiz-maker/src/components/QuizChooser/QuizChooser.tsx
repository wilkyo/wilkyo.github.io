import { ChangeEvent, FunctionComponent, useEffect } from "react";
import {
  DIFFICULTIES_OPTIONS,
  QuizCategory,
  TriviaCategory,
} from "../../shared/types";
import { useCategories } from "../hooks/useCategories";

interface QuizChooserProps {
  selectedCategory: QuizCategory;
  onChangeCategory: (category: QuizCategory) => void;
  selectedDifficulty: string;
  onChangeDifficulty: (category: string) => void;
  onClickCreate: () => void;
}

export const QuizChooser: FunctionComponent<QuizChooserProps> = ({
  selectedCategory,
  onChangeCategory,
  selectedDifficulty,
  onChangeDifficulty,
  onClickCreate,
}) => {
  const { categories } = useCategories();

  useEffect(() => {
    onChangeCategory(categories[0]);
  }, [categories, onChangeCategory]);

  const handleOnChangeCategory = (categoryString: string) => {
    const categoryId = parseInt(categoryString);
    const foundCategory = categories.find(
      (cat: QuizCategory) => cat.id === categoryId
    );
    // If the value is allowed
    if (foundCategory) {
      onChangeCategory(foundCategory);
    }
  };

  const handleOnChangeDifficulty = (difficulty: string) => {
    // If the value is allowed
    if (DIFFICULTIES_OPTIONS.find((diff: string) => diff === difficulty)) {
      onChangeDifficulty(difficulty);
    }
  };

  return (
    <div>
      <select
        id="categorySelect"
        className="form-select"
        value={selectedCategory.id}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          handleOnChangeCategory(event.target.value)
        }
      >
        {categories.map((option: TriviaCategory) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <select
        id="difficultySelect"
        className="form-select"
        value={selectedDifficulty}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          handleOnChangeDifficulty(event.target.value)
        }
      >
        {DIFFICULTIES_OPTIONS.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        type="button"
        id="createBtn"
        className="btn btn-primary"
        onClick={onClickCreate}
      >
        Create
      </button>
    </div>
  );
};
