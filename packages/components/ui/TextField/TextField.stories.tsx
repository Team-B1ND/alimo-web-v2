import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

export default {
  title: "ui/TextField",
  component: TextField,
} as Meta<typeof TextField>;

export const CommonTextField: StoryObj<typeof TextField> = {
  args: { shape: "default" },
};

export const RoundedTextField: StoryObj<typeof TextField> = {
  args: { shape: "rounded" },
};
