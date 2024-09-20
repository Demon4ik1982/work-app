import { User } from "../models/User";


export const getUser = async (id: number): Promise<User> => {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { credentials: "include" });
  const userData = await responce.json();
  return userData;
};
