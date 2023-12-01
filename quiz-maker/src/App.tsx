import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { QuizContextProvider } from "./components/QuizContextProvider";
import { QuizMakerPage } from "./components/QuizMaker/QuizMakerPage";
import { QuizResultsPage } from "./components/QuizResults/QuizResultsPage";

export const ROUTE_QUIZ = "/";
export const ROUTE_RESULTS = "/results";

function App() {
  return (
    <QuizContextProvider>
      <HashRouter>
        <Routes>
          <Route path={ROUTE_QUIZ} element={<QuizMakerPage />} />
          <Route path={ROUTE_RESULTS} element={<QuizResultsPage />} />
        </Routes>
      </HashRouter>
    </QuizContextProvider>
  );
}

export default App;
