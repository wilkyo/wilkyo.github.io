import { FC, PropsWithChildren } from "react";
import { User } from "../useUsersData";
import "./UserCard.scss";

interface UserCardProps {
  user: User;
}

export const UserCard: FC<UserCardProps> = (
  props: PropsWithChildren<UserCardProps>
) => {
  console.log("Rendered user component");

  const { user } = props;

  return (
    <div className="card user-card">
      <div className="card-header">{user.username}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span>Id : </span>
          <span>{user.id}</span>
        </li>
        <li className="list-group-item">
          <span>Name : </span>
          <span>{user.name}</span>
        </li>
        <li className="list-group-item">
          <span>Email address : </span>
          <span>{user.email}</span>
        </li>
        <li className="list-group-item">
          <span>Phone number : </span>
          <span>{user.phone}</span>
        </li>
      </ul>
    </div>
  );
};
