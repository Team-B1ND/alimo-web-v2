import { Meta, StoryObj } from "@storybook/react";
import { CategoryButton } from "./CategoryButton";

export default {
  title: "ui/Button/Category",
  component: CategoryButton,
  tags: ["autodocs"],
} as Meta<typeof CategoryButton>;

export const Category: StoryObj<typeof CategoryButton> = {
  args: {
    children: "메인"
  },
};
