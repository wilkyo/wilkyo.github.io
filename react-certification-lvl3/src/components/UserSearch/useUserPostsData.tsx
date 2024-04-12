import { useEffect, useState } from "react";

export interface UserPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const useUserPostsData = (userId: number) => {
  const [posts, setPosts] = useState<UserPost[]>();

  useEffect(() => {
    // Resets the data, if the userId changes
    setPosts(undefined);
    console.log("Fetching user posts data");
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response: Response) => response.json())
      .then((data: UserPost[]) => setPosts(data))
      .catch((error) => console.error(error));
  }, [userId]);

  return { posts };
};
