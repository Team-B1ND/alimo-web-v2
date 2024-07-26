import Sidebar from "./Sidebar";
import { Meta, StoryContext, composeStory } from "@storybook/react";
import React from "react";

export default {
  title: "ui/common/sidebar",
  component: Sidebar,
} as Meta;

const Template = (args) => {
  return <Sidebar {...args}></Sidebar>;
};

export const Common = Template.bind({});
Common.args = {};
