import { FC } from "react";
import { AutoCompleteComponent } from "../../api/AutoCompleteComponent/AutoCompleteComponent";
import { MenuComponent } from "../MenuComponent";

export const UserSearchPage: FC = () => {
  console.log("Rendered parent component");

  return (
    <div>
      <h1>
        EXERCISE #3 - Create a generic auto-filter dropdown component to filter
        any kind of data
      </h1>
      <MenuComponent />
      <AutoCompleteComponent
        className="form-control user-search--autocomplete"
        placeholder="Enter user name"
      />
    </div>
  );
};
