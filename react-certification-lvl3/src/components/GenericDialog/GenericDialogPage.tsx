import { FC } from "react";
import { GenericDialogComponent } from "../../api/GenericDialogComponent";
import { MenuComponent } from "../MenuComponent";

export const GenericDialogPage: FC = () => {
  console.log("Rendered parent component");

  return (
    <div>
      <h1>
        EXERCISE #2 - Create a generic dialog component that can be customized
        with any content
      </h1>
      <MenuComponent />
      <GenericDialogComponent>Test</GenericDialogComponent>
    </div>
  );
};
