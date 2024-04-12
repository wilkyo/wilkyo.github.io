import { FC } from "react";
import { useLocalStorage } from "../../api/useLocalStorage";

export const LocalStorageInput: FC = () => {
  const [input, setName] = useLocalStorage("input");
  // We observe that the component is rerendered only when the "input" storage value is updated
  console.log("Rendered LocalStorageInput component");

  return (
    <div>
      <h2>Update the storage "input" value</h2>
      Update its value from the form field (or from the localStorage)
      <form>
        <div className="form-group row">
          <label htmlFor="input" className="col-form-label col-6">
            Input value :
          </label>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              id="input"
              value={input ?? ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </form>
      <hr />
      And shows it here : <span className="mark">{input}</span>
    </div>
  );
};
