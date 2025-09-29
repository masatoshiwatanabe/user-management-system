// components/parts/CustomCard.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomCard from "./CustomCard";
import { Button } from "@mui/material";

const meta: Meta<typeof CustomCard> = {
  title: "Components/Parts/CustomCard",
  component: CustomCard,
  tags: ["autodocs"],
};
export default meta

type Story = StoryObj<typeof CustomCard>;

export const Default: Story = {
  args: {
    title: "カードタイトル",
    description: "これはカスタムカードの説明です。",
    actions: (
      <>
        <Button size="small" variant="contained" color="primary">
          アクション1 (Action 1)
        </Button>
        <Button size="small" variant="contained" color="error">
          アクション2 (Action 2)
        </Button>
      </>
    ),
  },
};

export const WithoutActions: Story = {
  args: {
    title: "アクションなしのカード",
    description: "アクションが含まれていないカードの説明。",
  },
};
