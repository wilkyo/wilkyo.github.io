import { FC, useState } from "react";
import { AutoComplete } from "../../api/AutoComplete/AutoComplete";
import { Loader } from "../Loader";
import { Menu } from "../Menu";
import { UserCard } from "./UserCard";
import "./UserSearchPage.scss";
import { User, useUserData } from "./useUserData";

export const UserSearchPage: FC = () => {
  console.log("Rendered parent component");
  const [selectedUser, setSelectedUser] = useState<User>();

  const { users } = useUserData();

  return (
    <div className="user-search">
      <h1>
        EXERCISE #3 - Create a generic auto-filter dropdown component to filter
        any kind of data
      </h1>
      <Menu />
      <h2>Search for a user</h2>
      <p>You can search by username or full name</p>
      <form>
        <div className="form-group row">
          <label htmlFor="input" className="col-form-label col-6">
            Search user :
          </label>
          <div className="col-6">
            {users ? (
              <AutoComplete<User>
                className="form-control"
                placeholder="Enter user name"
                data={users}
                labelProp="name"
                filterProp="username"
                valueChange={setSelectedUser}
              />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </form>
      <hr />
      {selectedUser && (
        <div className="user-search--result">
          <h2>There is the selected user</h2>
          <UserCard user={selectedUser} />
        </div>
      )}
    </div>
  );
};
