import { FC } from "react";
import { BillionsDialog } from "./BillionsDialog";

export const Billions: FC = () => {
  console.debug("Rendering billions component");

  return (
    <>
      <h2>Here is a test with the overlay dialog</h2>
      <p>
        This is where you will see billions of pictures. But, don't worry, they
        are trapped in a dialog !
      </p>
      <BillionsDialog />
    </>
  );
};
