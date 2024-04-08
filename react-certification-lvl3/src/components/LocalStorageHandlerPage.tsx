import { FunctionComponent } from "react";
import { useLocalStorage } from "../api/useStorage";
import { MenuComponent } from "./MenuComponent";

export const LocalStorageHandlerPage: FunctionComponent = () => {
  const [name, setName] = useLocalStorage("name");
  const [test] = useLocalStorage("test");
  console.log("Rendered component");

  return (
    <div>
      <h1>
        EXERCISE #1 - Create a generic localStorage handler usable by React
        function component
      </h1>
      <MenuComponent />
      <div>
        <h2>Update the storage "name" value</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name ?? ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>
        <hr />
        And shows it here : <span className="mark">{name}</span>
      </div>
      <hr />
      <div>
        <h2>Show the storage "test" value</h2>
        Here it is : <span className="mark">{test}</span>
      </div>
    </div>
  );
};
