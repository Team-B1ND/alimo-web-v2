import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "ui/Button",
  component: Button,
  args: {
    children: "로그인",
  },
  tags: ["autodocs"]
} as Meta<typeof Button>;

export const CtaButton: StoryObj<typeof Button> = {
  args: {
    disabled: false,
    buttonSize: "cta",
  },
};

export const LargeButton: StoryObj<typeof Button> = {
  args: {
    disabled: false,
    buttonSize: "large",
  },
};

export const MediumButton: StoryObj<typeof Button> = {
  args: {
    disabled: false,
    buttonSize: "medium",
  },
};

export const SmallButton: StoryObj<typeof Button> = {
  args: {
    disabled: false,
    buttonSize: "small",
  },
};
