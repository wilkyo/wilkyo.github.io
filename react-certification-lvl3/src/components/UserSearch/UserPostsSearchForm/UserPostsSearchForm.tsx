import { FC, useState } from "react";
import { AutoComplete } from "../../../api/AutoComplete/AutoComplete";
import { Loader } from "../../Loader";
import { UserPost, usePostsData } from "../useUserPostsData";
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

  const { posts } = usePostsData(user.id);

  return (
    <div className="posts-search-form">
      <div>
        <h2>Search for their posts</h2>
        <p>You can search by title or description</p>
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
                  labelProp="title"
                  filterProp="body"
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
      {selectedPost && (
        <div>
          <h3>There is the selected post</h3>
          <UserPostCard post={selectedPost} />
        </div>
      )}
    </div>
  );
};
