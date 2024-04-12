import { FC } from "react";
import { Menu } from "../Menu";
import { Billions } from "./Billions/Billions";
import { loremIpsum } from "./Billions/stubData";
import { Team } from "./Team/Team";

export const GenericDialogPage: FC = () => {
  console.log("Rendered parent component");

  return (
    <div>
      <h1>
        EXERCISE #2 - Create a generic dialog component that can be customized
        with any content
      </h1>
      <Menu />
      <Team />
      <hr />
      <Billions />
      <hr />
      <h2>And here is some padding text to have something behind the dialog</h2>
      {loremIpsum.map((text: string) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
};
