// components/parts/CustomButton.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";
import { Save } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const meta: Meta<typeof CustomButton> = {
  title: "Components/Parts/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CustomButton>;
export const Primary: Story = {
  args: {
    variantType: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variantType: "secondary",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variantType: "danger",
    children: "Danger Button",
  },
};

export const Gradient: Story = {
  args: {
    variantType: "primary",
    children: "Gradient Button",
    style: {
      background: "linear-gradient(45deg, #2196F3 30%, #9C27B0 90%)",
      color: "#fff",
    },
  },
};
export const Icon: Story = {
  args: {
    variantType: "primary",
    children: (
      <>
        <Save sx={{ mr: 1 }} /> 
        Save
      </>
    ),
  }
}

export const LoadingButton: Story = {
  render: (args) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000); // 3秒後に再度押せる
    };

    return (
      <CustomButton {...args} disabled={loading} onClick={handleClick}>
        {loading && (
          <CircularProgress
            size={16}
            style={{ marginRight: 8, color: "white" }}
          />
        )}
        {loading ? "Loading..." : "Click Me"}
      </CustomButton>
    );
  },
};