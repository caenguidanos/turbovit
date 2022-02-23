import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "../src/lib/base/ui-button-base";

export default {
   component: Button,
   title: "UI/Button/Base",
   parameters: {
      layout: "centered",
      actions: {
         handles: ["mouseover", "click"],
      },
   },
   argTypes: {
      text: { type: "string", description: "Text content of the button" },
      size: {
         description: "Size of the button",
         options: ["small", "medium", "large"],
         control: {
            type: "select",
         },
      },
      color: {
         description: "Color of the button",
         options: ["primary", "secondary", "accent"],
         control: {
            type: "select",
         },
      },
   },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Base = Template.bind({});

Base.args = {
   text: "Click me!",
   color: "primary",
   size: "medium",
};
