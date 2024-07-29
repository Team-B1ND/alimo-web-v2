import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CodeTextField } from "./TextField";

export default {
  title: "ui/TextField/CodeField",
  component: CodeTextField,
} as Meta<typeof CodeTextField>;

export const CodeField: StoryObj<typeof CodeTextField> = {
  args: { isDisabled: false },
};
