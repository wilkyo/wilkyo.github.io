import { FC } from "react";
import { MenuComponent } from "../MenuComponent";
import { LocalStorageInputComponent } from "./LocalStorageInputComponent";
import { LocalStorageTextComponent } from "./LocalStorageTextComponent";

export const LocalStorageHandlerPage: FC = () => {
  console.log("Rendered parent component");

  return (
    <div>
      <h1>
        EXERCISE #1 - Create a generic localStorage handler usable by React
        function component
      </h1>
      <MenuComponent />
      <LocalStorageInputComponent />
      <hr />
      <LocalStorageTextComponent />
    </div>
  );
};
