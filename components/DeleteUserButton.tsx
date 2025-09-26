import React from "react";
import { Button } from "@mui/material";
import { softDeleteUser } from "@/utils/api";

interface DeleteUserButtonProps {
  userId: number;
  onDelete: (userId: number) => void; // 再レンダリング用
}

export const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({
  userId,
  onDelete,
}) => {
  const softDelete = async () => {
    if (confirm("本当にこのユーザーを削除しますか？")) {
      try {
        await softDeleteUser(userId);
        onDelete(userId);
      } catch (error) {}
    }
  };
  return (
    <Button
      variant="outlined"
      sx={{ color: "red", BorderColor: "red" }}
      onClick={softDelete}
    >
      削除
    </Button>
  );
};

export default DeleteUserButton;
