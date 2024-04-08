import { FC } from "react";
import { BillionsDialogComponent } from "./BillionsDialogComponent";

export const BillionsComponent: FC = () => {
  console.log("Rendered billions component");

  return (
    <>
      <h2>Here is a test with the modal dialog</h2>
      <p>
        This is where you will see billions of pictures. But, don't worry, they
        are trapped in a modal !
      </p>
      <BillionsDialogComponent />
    </>
  );
};
