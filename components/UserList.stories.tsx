import type { Meta, StoryObj } from "@storybook/react";
import { UserList } from "./UserList";
import { User } from "../types/User";

const meta: Meta<typeof UserList> = {
  title: "components/UserList",
  component: UserList,
};
export default meta;

type Story = StoryObj<typeof UserList>;

const mockUsers: User[] = [
  {
    id: 1,
    name: "田中太郎",
    email: "taro@example.com",
    role: "admin",
    deleted: false,
  },
  {
    id: 2,
    name: "山田花子",
    email: "hanako@example.com",
    role: "user",
    deleted: false,
  },
  {
    id: 3,
    name: "佐藤次郎",
    email: "jiro@example.com",
    role: "user",
    deleted: false,
  },
];
export const Default: Story = {
  args: {
    users: mockUsers,
  },
};
