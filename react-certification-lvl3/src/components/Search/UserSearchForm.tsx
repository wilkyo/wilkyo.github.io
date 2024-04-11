import { FC, PropsWithChildren } from "react";
import { AutoComplete } from "../../api/AutoComplete/AutoComplete";
import { Loader } from "../Loader";
import { User, useUserData } from "../UserSearch/useUsersData";

interface UserSearchFormProps {
  onSelectedUser: (user: User) => void;
}

export const UserSearchForm: FC<UserSearchFormProps> = (
  props: PropsWithChildren<UserSearchFormProps>
) => {
  console.log("Rendered parent component");

  const { onSelectedUser } = props;
  const { users } = useUserData();

  return (
    <div>
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
                labelKey="name"
                filterKey="username"
                valueChange={onSelectedUser}
              />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
