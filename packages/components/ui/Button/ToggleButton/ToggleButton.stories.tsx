import { ToggleButton } from "./ToggleButton";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

export default {
  title: "ui/Button/Toggle",
  component: ToggleButton,
  tags: ["autodocs"],
} as Meta<typeof ToggleButton>;

export const EnableToggle: StoryObj<typeof ToggleButton> = {
  args: {
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
  },
};

export const DisableToggle: StoryObj<typeof ToggleButton> = {
  args: {
    disabled: true,
  },
};
