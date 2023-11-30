import "./App.scss";
import { QuizContextProvider } from "./components/QuizContextProvider";
import { QuizMakerPage } from "./components/QuizMakerPage";

function App() {
  return (
    <QuizContextProvider>
      <QuizMakerPage />
    </QuizContextProvider>
  );
}

export default App;
