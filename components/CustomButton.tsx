// components/parts/CustomButton.tsx

import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  variantType?: "primary" | "secondary" | "danger";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variantType = "primary",
  ...props
}) => {
  let color: ButtonProps["color"] = "primary";

  switch (variantType) {
    case "secondary":
      color = "secondary";
      break;
    case "danger":
      color = "error";
      break;
    default:
      color = "primary";
  }
  return <Button color={color} variant="contained" {...props} />;
};

export default CustomButton;
