import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { File } from "./File";

export default {
  title: "ui/File",
  component: File,
  tags: ["autodocs"],
} as Meta<typeof File>;

export const CommonFile: StoryObj<typeof File> = {
  args: {
    size: "191.3KB",
    title: "B1nd인턴+여행계획서.pptx",
    width: "320px",
  },
};
