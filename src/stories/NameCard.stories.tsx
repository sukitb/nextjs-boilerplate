import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import NameCard, { NameCardProps } from "@/components/NameCard";

export default {
  title: "Components/NameCard",
  component: NameCard,
} as Meta;

const Template: StoryFn<NameCardProps> = (args) => <NameCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  firstName: "John",
  lastName: "Doe",
};
