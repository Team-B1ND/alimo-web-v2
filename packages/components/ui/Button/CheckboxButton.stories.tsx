import { Meta, StoryObj } from "@storybook/react";
import { CheckBoxButton } from "./CheckBoxButton";

export default {
  title: "ui/Button/Checkbox",
  component: CheckBoxButton,
} as Meta<typeof CheckBoxButton>;

export const Checkbox: StoryObj<typeof CheckBoxButton> = {
  args: {},
};
