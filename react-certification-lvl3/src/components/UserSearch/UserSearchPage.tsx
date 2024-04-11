import { FC, useState } from "react";
import { Menu } from "../Menu";
import { UserPostsSearchForm } from "./UserPostsSearchForm/UserPostsSearchForm";
import { UserSearchForm } from "./UserSearchForm/UserSearchForm";
import "./UserSearchPage.scss";
import { User } from "./useUsersData";

export const UserSearchPage: FC = () => {
  console.log("Rendered parent component");
  const [selectedUser, setSelectedUser] = useState<User>();

  return (
    <div className="user-search">
      <h1>
        EXERCISE #3 - Create a generic auto-filter dropdown component to filter
        any kind of data
      </h1>
      <Menu />
      <UserSearchForm onSelectedUser={setSelectedUser} />
      <hr />
      {selectedUser && <UserPostsSearchForm user={selectedUser} />}
    </div>
  );
};
