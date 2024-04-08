import { FC } from "react";
import { BillionsDialogComponent } from "./BillionsDialogComponent";

export const BillionsComponent: FC = () => {
  console.log("Rendered billions component");

  return (
    <>
      <p>
        This is where you will billions of pictures. But, don't worry, they are
        trapped in a modal !
      </p>
      <BillionsDialogComponent />
    </>
  );
};
