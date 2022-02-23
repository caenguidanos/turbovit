import { Story, Meta } from "@storybook/react";

import { Button, buttonBaseArgsTypes, ButtonColor, ButtonProps, ButtonSize } from "../src/lib/base/ui-button-base";

export default {
   component: Button,
   title: "UI/Button/Base",
   parameters: {
      layout: "centered",
   },
   argTypes: {
   text: { type: "string", defaultValue: "Button", description: "Text content of the button" },
   size: {
      description: "Size of the button",
      control: {
         type: "select",
         options: [ButtonSize.Small, ButtonSize.Medium, ButtonSize.Large],
         labels: {
            [ButtonSize.Small]: "Small",
            [ButtonSize.Medium]: "Medium",
            [ButtonSize.Large]: "Large",
         },
      },
   },
   color: {
      description: "Color of the button",
      control: {
         type: "select",
         options: [ButtonColor.Primary, ButtonColor.Secondary, ButtonColor.Accent],
         labels: {
            [ButtonColor.Primary]: "Primary",
            [ButtonColor.Secondary]: "Secondary",
            [ButtonColor.Accent]: "Accent",
         },
      },
   },
},
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
