import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";

export default {
  title: "ui/Dialog",
  component: Dialog,
} as Meta<typeof Dialog>;

export const ChoosingDialog: StoryObj<typeof Dialog> = {
  args: {
    type: "choosing",
  },
};

export const DismissDialog: StoryObj<typeof Dialog> = {
  args: {
    type: "dismiss",
  },
};

export const InputDialog: StoryObj<typeof Dialog> = {
  args: {
    type: "content",
  },
};
