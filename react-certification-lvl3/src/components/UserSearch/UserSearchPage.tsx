import { FC } from "react";
import { AutoCompleteComponent } from "../../api/AutoCompleteComponent/AutoCompleteComponent";
import { LoaderComponent } from "../LoaderComponent";
import { MenuComponent } from "../MenuComponent";
import { User, useUserData } from "./useUserData";

export const UserSearchPage: FC = () => {
  console.log("Rendered parent component");

  const { users } = useUserData();

  const handleOnValueChange = (value: User) => {
    console.log("User selected", value);
  };

  return (
    <div>
      <h1>
        EXERCISE #3 - Create a generic auto-filter dropdown component to filter
        any kind of data
      </h1>
      <MenuComponent />
      {users ? (
        <AutoCompleteComponent<User>
          className="form-control user-search--autocomplete"
          placeholder="Enter user name"
          data={users}
          labelProp="name"
          filterProp="username"
          onValueChange={handleOnValueChange}
        />
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
};
