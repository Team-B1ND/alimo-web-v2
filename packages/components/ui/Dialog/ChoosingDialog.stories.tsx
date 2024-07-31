import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";

export default {
  title: "ui/Dialog/Choosing",
  component: Dialog,
  tags: ["autodocs"],
} as Meta<typeof Dialog>;

export const ChoosingDialog: StoryObj<typeof Dialog> = {
  args: {
    title: "제목을 입력해주세요",
    content: "내용을 입력해주세요",
    denyContent: "취소",
    confirmContent: "다음으로",
    type: "choosing",
  },
};