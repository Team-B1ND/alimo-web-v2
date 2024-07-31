import { Meta, StoryObj } from "@storybook/react";
import { CategorySelectButton } from "./CategorySelectButton";

export default {
  title: "ui/Button/CategorySelect",
  component: CategorySelectButton,
  tags: ["autodocs"],
} as Meta<typeof CategorySelectButton>;

export const CategorySelect: StoryObj<typeof CategorySelectButton> = {
  args: {
    children: "선택"
  },
};
