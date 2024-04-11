import { FC, useState } from "react";
import { AutoComplete } from "../../api/AutoComplete/AutoComplete";
import { Loader } from "../Loader";
import { Menu } from "../Menu";
import { UserCard } from "./UserCard";
import { User, useUserData } from "./useUserData";

export const UserSearchPage: FC = () => {
  console.log("Rendered parent component");
  const [selectedUser, setSelectedUser] = useState<User>();

  const { users } = useUserData();

  return (
    <div>
      <h1>
        EXERCISE #3 - Create a generic auto-filter dropdown component to filter
        any kind of data
      </h1>
      <Menu />
      {users ? (
        <AutoComplete<User>
          className="form-control user-search--autocomplete"
          placeholder="Enter user name"
          data={users}
          labelProp="name"
          filterProp="username"
          onValueChange={setSelectedUser}
        />
      ) : (
        <Loader />
      )}
      {selectedUser && <UserCard user={selectedUser} />}
    </div>
  );
};
