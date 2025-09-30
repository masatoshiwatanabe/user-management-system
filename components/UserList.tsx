import React, { useState } from "react";
import { User } from "../types/User";
import { softDeleteUser } from "@/utils/api";
import CustomCard from "./parts/CustomCard";
import { Button, Link } from "@mui/material";
import CustomButton from "./parts/CustomButton";
import CustomModal from "./parts/CustomModal";

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  const [filterUsers, setFilterUsers] = useState<User[]>(users);
  const [openModal, setOpenModal] = useState(false);
  const [deleteUserId, setdeleteUserId] = useState<number | null>(null);

  // 削除ボタンを押したときに起動し、選択したユーザーのuserIdをdeleteUserIdにいれる。openModalをtureに。
  const handleDeleteClick = (userId: number) => {
    setdeleteUserId(userId);
    setOpenModal(true);
  };
  // モーダルが閉じられたときに起動し、openModalをfalse。deleteUserIdをnull。
  const handleCloseModal = () => {
    setOpenModal(false);
    setdeleteUserId(null);
  };
  // モーダルでユーザーを削除する選択が選ばれたときに論理削除し、フィルター処理したユーザー一覧を出す。最後にhandleCloseModalを起動し閉じる。
  const handleConfirmDelete = async () => {
    if (deleteUserId !== null) {
      try {
        await softDeleteUser(deleteUserId);
        setFilterUsers((filterUsers) =>
          filterUsers.filter((user: User) => user.id !== deleteUserId)
        );
      } catch (error) {
      } finally {
        handleCloseModal();
      }
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
              {/*  削除ボタンがクリックされたとき、削除対象のユーザーIDを渡す。モーダルを表示 */}
              <CustomButton
                onClick={() => handleDeleteClick(user.id)}
                variantType="danger"
              >
                削除
              </CustomButton>
            </>
          }
        />
      ))}
      {/* モーダルを表示する。削除の確認・キャンセルの動きをここで管理する */}
      <CustomModal
        open={openModal}
        title="ユーザー削除"
        content="本当にこのユーザーを削除しますか？"
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};
export default UserList;