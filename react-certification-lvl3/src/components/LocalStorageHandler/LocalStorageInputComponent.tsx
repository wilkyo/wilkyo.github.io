import { FunctionComponent } from "react";
import { useLocalStorage } from "../../api/useLocalStorage";

export const LocalStorageInputComponent: FunctionComponent = () => {
  const [input, setName] = useLocalStorage("input");
  // We observe that the component is rerendered only when the "input" storage value is updated
  console.log("Rendered LocalStorageInputComponent");

  return (
    <div>
      <h2>Update the storage "input" value</h2>
      Update its value from the form field (or from the localStorage)
      <form>
        <div className="form-group">
          <label htmlFor="input" className="control-label">
            Input value :
          </label>
          <input
            type="text"
            className="form-control"
            id="input"
            value={input ?? ""}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
      <hr />
      And shows it here : <span className="mark">{input}</span>
    </div>
  );
};
