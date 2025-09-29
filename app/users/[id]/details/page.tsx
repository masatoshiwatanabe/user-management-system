"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Typography, Alert, CircularProgress } from "@mui/material";
import { fetchUserById } from "@/utils/api";
import UserDetails from "@/components/UserDetails";
import type { User } from "@/types/User";
const UserDetailsPage: React.FC = () => {
  const id = useParams().id;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  if (!id || Array.isArray(id)) {
    return <Typography>ユーザーIDが無効です</Typography>;
  }
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await fetchUserById(Number(id));
        setUser(data);
      } catch (error) {
        setError("ユーザーの取得に失敗しました。" + error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }
  if (user == null) {
    return <Typography>ユーザー情報が存在しません</Typography>;
  }
  return <UserDetails user={user} />;
};
export default UserDetailsPage;
