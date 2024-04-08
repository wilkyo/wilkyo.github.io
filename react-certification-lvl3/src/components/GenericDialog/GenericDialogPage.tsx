import { FC } from "react";
import { MenuComponent } from "../MenuComponent";
import { TeamComponent } from "./GenericDialogOverlayComponent/TeamComponent";

export const GenericDialogPage: FC = () => {
  console.log("Rendered parent component");

  return (
    <div>
      <h1>
        EXERCISE #2 - Create a generic dialog component that can be customized
        with any content
      </h1>
      <MenuComponent />
      <h2>Here is a test with the overlay dialog</h2>
      <TeamComponent />
    </div>
  );
};
