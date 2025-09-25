// components/EditUserForm.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React, { use, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { fetchUserById, updateUser } from "../utils/api";
import { User } from "../types/User";
import { useRouter } from "next/navigation";

// 必要に応じて利用する
interface EditUserFormInputs {
  name: string;
  email: string;
  role: string;
}

interface EditUserFormProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
  userId: number;
}

// TODO: ユーザー編集フォームコンポーネントを実装する
const EditUserForm: React.FC<EditUserFormProps> = ({
  userId,
  onSuccess,
  onError,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditUserFormInputs>();

  useEffect(() => {
    const getUser = async () => {
      try {
        const user: User | null = await fetchUserById(userId);
        if (user) {
          setValue("name", user.name);
          setValue("email", user.email);
          setValue("role", user.role);
        } else {
          // エラー処理
        }
      } catch (err) {
        // エラー処理
      }
    };
    getUser();
  }, [userId, setValue]);

  const onSubmit: SubmitHandler<EditUserFormInputs> = async (formData) => {
    try {
      await updateUser(userId, formData);

      if (onSuccess) onSuccess();
    } catch (error) {
      if (onError) onError(error);
    }
  };
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        ユーザー情報編集
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="名前"
          {...register("name", { required: "名前は必須です" })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="メール"
          type="email"
          {...register("email", { required: "メールは必須です" })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="ロール"
          {...register("role", { required: "ロールは必須です" })}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="outlined">
          更新
        </Button>
      </form>
    </Box>
  );
};

export default EditUserForm;
