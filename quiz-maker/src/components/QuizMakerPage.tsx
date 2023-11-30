import { FunctionComponent, useState } from "react";
import {
  DEFAULT_CATEGORY,
  DIFFICULTIES_OPTIONS,
  TriviaCategory,
} from "../shared/types";
import { QuizChooser } from "./QuizChooser";

export const QuizMakerPage: FunctionComponent = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<TriviaCategory>(DEFAULT_CATEGORY);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(
    DIFFICULTIES_OPTIONS[0]
  );

  const handleOnClickCreate = () => {
    console.log("CREATE");
  };

  return (
    <>
      <h1>QUIZ MAKER</h1>
      <QuizChooser
        selectedCategory={selectedCategory}
        onChangeCategory={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        onChangeDifficulty={setSelectedDifficulty}
        onClickCreate={handleOnClickCreate}
      />
    </>
  );
};
