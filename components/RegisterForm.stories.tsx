// components/RegisterForm.stories.tsx

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./RegisterForm";

const meta:Meta<typeof RegisterForm>={
    title:"components/RegisterForm",
    component:RegisterForm,
}
export default meta;

type Story = StoryObj<typeof RegisterForm>
export const Default: Story = {
  args: {
    onSuccess: () => alert("登録成功！"),
    onError: () => alert("登録失敗..."),
  },
};