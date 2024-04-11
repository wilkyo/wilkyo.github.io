import { FC } from "react";
import { Menu } from "./Menu";

export const HomePage: FC = () => {
  return (
    <div>
      <h1>Home page ReactJS Certification level 3</h1>
      <Menu />
      <div>
        <p>Welcome on my ReactJS certification level 3 application !</p>
        <p>My name is Willy François, and I'm glad to find you there {":)"}</p>
      </div>
    </div>
  );
};
