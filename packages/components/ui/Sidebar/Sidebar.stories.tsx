import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Sidebar from "./Sidebar";

export default {
  title: "ui/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
} as Meta<typeof Sidebar>;

export const Default: StoryObj<typeof Sidebar> = {
  args: { screen: "desktop" },
};
