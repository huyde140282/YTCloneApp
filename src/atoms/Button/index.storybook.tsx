import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "./types";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
  args: {
    name: 'Button'
  },
};
