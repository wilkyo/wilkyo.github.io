import { useEffect, useState } from "react";

export interface UserPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePostsData = (userId: number) => {
  const [posts, setPosts] = useState<UserPost[]>();

  useEffect(() => {
    console.log("Fetching posts data");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response: Response) => response.json())
      .then((data: UserPost[]) =>
        setPosts(data.filter((post: UserPost) => post.userId === userId))
      )
      .catch((error) => console.error(error));
  }, [userId]);

  return { posts };
};
