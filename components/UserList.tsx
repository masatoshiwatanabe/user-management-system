import React, { useState } from "react";
import { User } from "../types/User";
import UserCard from "./UserCard";
import { softDeleteUser } from "@/utils/api";

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  const [filterUsers, setFilterUsers] = useState<User[]>(users);
  const softDelete = async (deleteUserId: number) => {
    if (confirm("本当にこのユーザーを削除しますか？")) {
      try {
        await softDeleteUser(deleteUserId);
        setFilterUsers((filterUsers) =>
          filterUsers.filter((user: User) => user.id !== deleteUserId)
        );
      } catch (error) {}
    }
  };

  return (
    <>
      {filterUsers.map((user) => (
        <UserCard key={user.id} user={user} onDelete={softDelete} />
      ))}
    </>
  );
};
export default UserList;
