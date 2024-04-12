import { FC, useState } from "react";
import { AutoComplete } from "../../../api/AutoComplete/AutoComplete";
import { Loader } from "../../Loader";
import { UserPost, useUserPostsData } from "../useUserPostsData";
import { User } from "../useUsersData";
import { UserPostCard } from "./UserPostCard";

interface PostsSearchFormProps {
  user: User;
}
export const UserPostsSearchForm: FC<PostsSearchFormProps> = (
  props: PostsSearchFormProps
) => {
  const { user } = props;

  const [selectedPost, setSelectedPost] = useState<UserPost>();

  const { posts } = useUserPostsData(user.id);

  return (
    <div className="posts-search-form">
      <div>
        <h2>Search for their posts</h2>
        <p>You can search by title or body</p>
        <form>
          <div className="form-group row">
            <label htmlFor="input" className="col-form-label col-3">
              Search post :
            </label>
            <div className="col-9">
              {posts ? (
                <AutoComplete<UserPost>
                  className="form-control"
                  placeholder="Enter post content"
                  data={posts}
                  labelKey="title"
                  additionalFilterKey="body"
                  valueChange={setSelectedPost}
                />
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </form>
      </div>
      <hr />
      {selectedPost && selectedPost.userId === user.id && (
        <div>
          <h3>There is the selected post</h3>
          <UserPostCard post={selectedPost} />
        </div>
      )}
    </div>
  );
};
