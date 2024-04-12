import { useEffect, useState } from "react";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  // No need for other information
}

export const useUserData = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    console.log("Fetching user data");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response: Response) => response.json())
      .then((data: User[]) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return { users };
};
