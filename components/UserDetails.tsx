import { User } from "../types/User";
import { Typography, CardContent } from "@mui/material";

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        ユーザー詳細
      </Typography>
      <CardContent>
        <Typography variant="h5" component="div">
          名前:{user.name}
        </Typography>
        <Typography color="text.secondary">メール:{user.email}</Typography>
        <Typography variant="body2">役割: {user.role}</Typography>
      </CardContent>
    </>
  );
};
export default UserDetails;
