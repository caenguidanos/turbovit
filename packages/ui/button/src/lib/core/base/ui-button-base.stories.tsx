import { Story, Meta } from "@storybook/react";

import { Button, buttonBaseArgsTypes, ButtonColor, ButtonProps, ButtonSize } from "./ui-button-base";

export default {
   component: Button,
   title: "UI/Button/Base",
   parameters: {
      layout: "centered",
   },
   argTypes: buttonBaseArgsTypes,
} as Meta;

interface ButtonPropsControl {
   text: ButtonProps["data"]["text"];
   color: ButtonProps["styles"]["color"];
   size: ButtonProps["styles"]["size"];
}

const Template: Story<ButtonPropsControl> = (args) => (
   <Button data={{ text: args.text }} styles={{ size: args.size, color: args.color }} />
);

export const Base = Template.bind({});
Base.args = {
   text: "Click me!",
   color: ButtonColor.Primary,
   size: ButtonSize.Medium,
};
