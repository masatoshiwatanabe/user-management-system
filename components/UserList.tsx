import React, { useState } from "react";
import { User } from "../types/User";
import { softDeleteUser } from "@/utils/api";
import CustomCard from "./parts/CustomCard";
import { Button, Link } from "@mui/material";
import CustomButton from "./parts/CustomButton";

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
        <CustomCard
          key={user.id}
          title={user.name}                 
          description={`メール: ${user.email}\n役割: ${user.role}`}
          actions={
            <>
              <Button
                variant="outlined"
                size="small"
                component={Link}
                href={`/users/${user.id}/details`}
              >
                詳細
              </Button>
              <Button
                variant="outlined"
                size="small"
                component={Link}
                href={`/users/${user.id}/edit`}
              >
                編集
              </Button>
              <CustomButton
                onClick={() => softDelete(user.id)}
                variantType="danger"
              >
                削除
              </CustomButton>
            </>
          }
        />
      ))}
    </>
  );
};
export default UserList;
