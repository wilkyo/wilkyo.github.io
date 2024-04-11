import { FC } from "react";
import { Menu } from "../Menu";
import { LocalStorageInput } from "./LocalStorageInput";
import { LocalStorageText } from "./LocalStorageText";

export const LocalStorageHandlerPage: FC = () => {
  console.log("Rendered parent component");

  return (
    <div>
      <h1>
        EXERCISE #1 - Create a generic localStorage handler usable by React
        function component
      </h1>
      <Menu />
      <LocalStorageInput />
      <hr />
      <LocalStorageText />
    </div>
  );
};
