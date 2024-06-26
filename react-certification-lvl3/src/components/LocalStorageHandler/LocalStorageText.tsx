import { FC } from "react";
import { useLocalStorage } from "../../api/useLocalStorage";

export const LocalStorageText: FC = () => {
  // No need for setter
  const [text] = useLocalStorage("text");
  // We observe that the component is rerendered only when the "text" storage value is updated
  console.debug("Rendering LocalStorageText component");

  return (
    <div>
      <h2>Show the storage "text" value</h2>
      Update its value directly in the localStorage.
      <br />
      Here it is : <span className="mark">{text}</span>
    </div>
  );
};
