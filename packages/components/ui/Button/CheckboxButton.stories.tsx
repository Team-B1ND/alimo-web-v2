import { Meta, StoryObj } from "@storybook/react";
import { CheckBoxButton } from "./Button";

export default {
  title: "ui/Button/Checkbox",
  component: CheckBoxButton,
} as Meta<typeof CheckBoxButton>;

export const Checkbox: StoryObj<typeof CheckBoxButton> = {
  args: {},
};
