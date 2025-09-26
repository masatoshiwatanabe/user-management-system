import React from "react";
import { User } from "../types/User";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
};
export default UserList;
