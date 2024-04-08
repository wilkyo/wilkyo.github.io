import { FC } from "react";
import { MenuComponent } from "../MenuComponent";
import { BillionsComponent } from "./BillionsComponent/BillionsComponent";
import { TeamComponent } from "./TeamComponent/TeamComponent";

export const GenericDialogPage: FC = () => {
  console.log("Rendered parent component");

  return (
    <div>
      <h1>
        EXERCISE #2 - Create a generic dialog component that can be customized
        with any content
      </h1>
      <MenuComponent />
      <TeamComponent />
      <hr />
      <BillionsComponent />
    </div>
  );
};
