import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
};

export default meta;

export const Common: StoryObj<typeof Button> = {
  args: {},
};
