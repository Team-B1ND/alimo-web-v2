import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CodeTextField, TextField } from "./TextField";

export default {
  title: "ui/TextField",
  component: TextField,
  tags: ["autodocs"],
} as Meta<typeof TextField>;

export const CommonTextField: StoryObj<typeof TextField> = {
  args: { shape: "default", placeholder: "이메일을 입력해주세요" },
};

export const RoundedTextField: StoryObj<typeof TextField> = {
  args: { shape: "rounded", placeholder: "이메일을 입력해주세요." },
};
