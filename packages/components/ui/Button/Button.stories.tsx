import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "ui/Button",
  component: Button,
  args: {
    children: "로그인",
  },
  tags: ["autodocs"],
} as Meta<typeof Button>;

export const Common: StoryObj<typeof Button> = {
  args: {
    disabled: false,
    buttonSize: "cta",
  },
};
