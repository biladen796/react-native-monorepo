import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View } from "react-native";
import StyledButton from "./Button";

const meta = {
  title: "StyledButton",
  component: StyledButton,
  args: {
    width: '$3',
    height: '$1',
    text: "Button",
    backgroundColor: "primary",
    theme: 'light',
    fontSize: 16,
    fontWeight: '500',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof StyledButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onPress: action("onPress"),
    width: '$15',
    height: '$5',
    text: "Button",
    backgroundColor: "$blue12Light",
    theme: 'light',
    fontSize: 16,
    fontWeight: '500',
  },
};

export const Advanced: Story = {
  args: {
    onPress: action("onPress"),
    width: '$15',
    height: '$5',
    text: "Button Advanced",
    backgroundColor: "$blue12Light",
    theme: 'light',
    fontSize: 16,
    fontWeight: 'bold',
  },
};
