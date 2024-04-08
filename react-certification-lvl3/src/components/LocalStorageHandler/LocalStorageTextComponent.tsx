import { FunctionComponent } from "react";
import { useLocalStorage } from "../../api/useStorage";

export const LocalStorageTextComponent: FunctionComponent = () => {
  const [text] = useLocalStorage("text");
  // We observe that the componend is rerendered only when the "text" storage value is updated
  console.log("Rendered LocalStorageTextComponent");

  return (
    <div>
      <h2>Show the storage "text" value</h2>
      Update its value directly in the localStorage.
      <br />
      Here it is : <span className="mark">{text}</span>
    </div>
  );
};
