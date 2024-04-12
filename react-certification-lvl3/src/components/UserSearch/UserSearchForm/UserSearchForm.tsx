import { FC, useState } from "react";
import { AutoComplete } from "../../../api/AutoComplete/AutoComplete";
import { Loader } from "../../Loader";
import { User, useUsersData } from "../useUsersData";
import { UserCard } from "./UserCard";

interface UserSearchFormProps {
  onSelectedUser: (user: User) => void;
}

export const UserSearchForm: FC<UserSearchFormProps> = (
  props: UserSearchFormProps
) => {
  console.debug("Rendering parent component");

  const [user, setUser] = useState<User>();

  const { onSelectedUser } = props;
  const { users } = useUsersData();

  const handleValueChange = (value: User) => {
    setUser(value);
    onSelectedUser(value);
  };

  return (
    <div className="user-search-form">
      <h2>Search for a user</h2>
      <p>You can search by full name</p>
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
                labelKey="name"
                valueChange={handleValueChange}
              />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </form>
      {user && (
        <>
          <hr />
          <div className="user-search--result">
            <h3>There is the selected user</h3>
            <UserCard user={user} />
          </div>
        </>
      )}
    </div>
  );
};
