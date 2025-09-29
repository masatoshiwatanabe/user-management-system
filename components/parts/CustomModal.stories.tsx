// components/parts/CustomModal.stories.tsx
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CustomModal from "./CustomModal";
import CustomButton from "./CustomButton";
import { Box } from "@mui/material";

// メタデータ
const meta: Meta<typeof CustomModal> = {
  title: "Components/Parts/CustomModal",
  component: CustomModal,
};
export default meta;

type Story = StoryObj<typeof CustomModal>;

// デフォルトストーリー
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box>
        {/* ボタンクリックでモーダルを開く */}
        <CustomButton variantType="primary" onClick={() => setOpen(true)}>
          モーダルを開く
        </CustomButton>
        <CustomModal
          open={open}
          title="モーダルタイトル"
          content="ここにモーダルの内容が入ります。"
          onClose={() => setOpen(false)}
          onConfirm={() => {
            alert("確認ボタンがクリックされました！");
            setOpen(false);
          }}
        />
      </Box>
    );
  },
};