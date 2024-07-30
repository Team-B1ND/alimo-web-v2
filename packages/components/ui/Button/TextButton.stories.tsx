import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextButton } from "./TextButton";

export default {
  title: "ui/Button/TextTypeButton",
  component: TextButton,
} as Meta<typeof TextButton>;

export const TextTypeButton: StoryObj<typeof TextButton> = {
  args: {},
};
