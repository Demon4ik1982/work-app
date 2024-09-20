import { Users } from "../models/Users";


export const getUsers = async (): Promise<Users> => {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/users`, { credentials: "include" });
  const userList = await responce.json();
  return userList;
};
