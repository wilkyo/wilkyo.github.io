export interface CategoriesData {
  trivia_categories: TriviaCategory[];
}

export interface TriviaCategory {
  id: number;
  name: string;
}

export const DEFAULT_CATEGORY: TriviaCategory = {
  id: -1,
  name: "Select a category",
};

export const DIFFICULTIES_OPTIONS = [
  "Select difficulty",
  "Easy",
  "Medium",
  "Hard",
];
