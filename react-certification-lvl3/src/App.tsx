import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./components/HomePage";
import { LocalStorageHandlerPage } from "./components/LocalStorageHandler/LocalStorageHandlerPage";
export const ROUTE_HOME = "/";
export const ROUTE_LOCAL_STORAGE_HANDLER = "/local-storage-handler";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTE_HOME} element={<HomePage />} />
        <Route
          path={ROUTE_LOCAL_STORAGE_HANDLER}
          element={<LocalStorageHandlerPage />}
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
