import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";

export default {
  title: "ui/Dialog/Dismiss",
  component: Dialog,
  tags: ["autodocs"],
} as Meta<typeof Dialog>;

export const DismissDialog: StoryObj<typeof Dialog> = {
  args: {
    title: "제목을 입력해주세요",
    content: "내용을 입력해주세요",
    type: "dismiss",
    denyContent: "취소",
  },
};
