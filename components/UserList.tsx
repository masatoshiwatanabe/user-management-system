import React, { useState } from "react";
import { User } from "../types/User";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  const [filterUsers, setFilterUsers] = useState<User[]>(users);
  const removeUser = (deleteUserId: number) => {
    setFilterUsers((filterUsers) =>
      filterUsers.filter((user: User) => user.id !== deleteUserId)
    );
  };
  return (
    <>
      {filterUsers.map((user) => (
        <UserCard key={user.id} user={user} onDelete={removeUser} />
      ))}
    </>
  );
};
export default UserList;
