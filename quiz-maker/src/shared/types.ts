// API structures
export interface CategoriesData {
  trivia_categories: TriviaCategory[];
}

export interface TriviaCategory {
  id: number;
  name: string;
}

export interface OpenTdbData {
  response_code: number;
  results: OpenTdbResult[];
}

export interface OpenTdbResult {
  type: "multiple";
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

// Custom structures

export interface QuizCategory {
  id: number;
  name: string;
}

export const DEFAULT_CATEGORY: QuizCategory = {
  id: -1,
  name: "Select a category",
};

export const DIFFICULTIES_OPTIONS = [
  "Select difficulty",
  "Easy",
  "Medium",
  "Hard",
];

export interface QuizQuestion {
  question: string;
  correctAnswer: string;
  answers: string[];
}
