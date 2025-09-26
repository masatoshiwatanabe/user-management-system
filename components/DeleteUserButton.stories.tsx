import type { Meta, StoryObj } from "@storybook/react";
import DeleteUserButton from "./DeleteUserButton";

const meta: Meta<typeof DeleteUserButton> = {
  title: "components/DeleteUserButton",
  component: DeleteUserButton,
};
export default meta;

type Story = StoryObj<typeof DeleteUserButton>;
export const Default: Story = {
  args: {
    userId: 1,
    onDelete: () => alert("論理削除完了"),
  },
};
