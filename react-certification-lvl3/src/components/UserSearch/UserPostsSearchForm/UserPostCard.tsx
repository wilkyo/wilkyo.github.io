import { FC, PropsWithChildren } from "react";
import { UserPost } from "../useUserPostsData";
import "./UserPostCard.scss";

interface UserPostCardProps {
  post: UserPost;
}

export const UserPostCard: FC<UserPostCardProps> = (
  props: PropsWithChildren<UserPostCardProps>
) => {
  console.log("Rendered user post component");

  const { post } = props;

  return (
    <div className="card post-card">
      <div className="card-header">{post.title}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span>User Id : </span>
          <span>{post.userId}</span>
        </li>
        <li className="list-group-item">
          <span>Id : </span>
          <span>{post.id}</span>
        </li>
        <li className="list-group-item">
          <span>Name : </span>
          <span>{post.body}</span>
        </li>
      </ul>
    </div>
  );
};
