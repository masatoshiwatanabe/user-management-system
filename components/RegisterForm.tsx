// components/RegisterForm.tsx

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { createUser } from "../utils/api";

// 登録する型を入れるため createUserはidとdeletedは除くため
interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}

// ボタンを押したときに成功か失敗かを判断できるようにするため呼びだしておく
interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}
// TODO: 新規登録フォームコンポーネントを実装する
const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onError }) => {
  // useFormを使うときに宣言　型はRegisterFormInputs使用
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();
  // フォームを送信したときにAPIリクエストを送りRegisterFormInputsとしてかを整えてformDataに渡す。
  const onSubmit: SubmitHandler<RegisterFormInputs> = async (formData) => {
    try {
      await createUser(formData as RegisterFormInputs);
      // APIリクエストがうまくいったら onSuccessの処理
      if (onSuccess) onSuccess();
      // APIリクエストが失敗したら　onErrorの処理
    } catch (error) {
      if (onError) onError(error);
    }
  };
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        新規登録
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
          登録
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
