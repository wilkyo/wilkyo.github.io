import { FunctionComponent } from "react";
import { MenuComponent } from "./MenuComponent";

export const HomePage: FunctionComponent = () => {
  return (
    <div>
      <h1>
        Home page ReactJS Certification level 3<br />
        Willy François
      </h1>
      <MenuComponent />
    </div>
  );
};
