import { Meta, StoryObj } from "@storybook/react";
import { CheckBoxButton } from "./CheckBoxButton";

export default {
  title: "ui/Button/Checkbox",
  component: CheckBoxButton,
  tags: ["autodocs"],
} as Meta<typeof CheckBoxButton>;

export const EnableCheckbox: StoryObj<typeof CheckBoxButton> = {
  args: {
    disabled: false,
  },
};

export const DisableCheckbox: StoryObj<typeof CheckBoxButton> = {
  args: {
    disabled: true,
  },
};
