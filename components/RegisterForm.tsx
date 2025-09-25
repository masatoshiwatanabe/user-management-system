// components/RegisterForm.tsx

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { createUser } from "../utils/api";

interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}

interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
  disable;
}
// TODO: 新規登録フォームコンポーネントを実装する
const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        新規登録
      </Typography>
      <form>
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
      </form>
    </Box>
  );
};

export default RegisterForm;
