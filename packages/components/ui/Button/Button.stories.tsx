import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "ui/Button",
  component: Button,
} as Meta<typeof Button>;

export const Common: StoryObj<typeof Button> = {
  args: { disabled: false },
};
