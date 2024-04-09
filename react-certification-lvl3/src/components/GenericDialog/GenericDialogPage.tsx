import { FC } from "react";
import { MenuComponent } from "../MenuComponent";
import { BillionsComponent } from "./BillionsComponent/BillionsComponent";
import { loremIpsum } from "./BillionsComponent/data";
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
      <hr />
      <h2>And here is some padding text to have something behind the dialog</h2>
      {loremIpsum.map((text: string) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
};
