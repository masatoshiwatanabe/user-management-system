// components/parts/CustomCard.tsx

import React from "react";
import { Card, CardContent, Typography, CardActions, CardProps } from "@mui/material";

// TODO: インターフェースを修正
interface CustomCardProps extends CardProps {
  actions?: React.ReactNode;
  title: string;
  description: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  actions,
  ...props
}) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }} {...props}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default CustomCard;
