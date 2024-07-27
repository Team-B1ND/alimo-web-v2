import { ToggleButton } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "ui/Button/Toggle",
  component: ToggleButton,
} as Meta<typeof ToggleButton>;

export const Toggle: StoryObj<typeof ToggleButton> = {
  args: { disabled: false },
};
