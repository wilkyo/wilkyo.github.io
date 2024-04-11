import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { GenericDialogPage } from "./components/GenericDialog/GenericDialogPage";
import { HomePage } from "./components/HomePage";
import { LocalStorageHandlerPage } from "./components/LocalStorageHandler/LocalStorageHandlerPage";
import { UserSearchPage } from "./components/UserSearch/UserSearchPage";

export const ROUTE_HOME = "/";
export const ROUTE_LOCAL_STORAGE_HANDLER = "/local-storage-handler";
export const ROUTE_GENERIC_DIALOG = "/generic-dialog";
export const ROUTE_USER_SEARCH = "/user-search";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTE_HOME} element={<HomePage />} />
        <Route
          path={ROUTE_LOCAL_STORAGE_HANDLER}
          element={<LocalStorageHandlerPage />}
        />
        <Route path={ROUTE_GENERIC_DIALOG} element={<GenericDialogPage />} />
        <Route path={ROUTE_USER_SEARCH} element={<UserSearchPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
