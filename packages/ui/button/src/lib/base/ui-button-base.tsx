import { styled } from "stitches/stitches.config";

import type * as Stitches from "@stitches/react";

import "./ui-button-base.module.scss";

const StyledButton = styled("button", {
   color: "white",
   fontFamily: "Inter, var(--font-sans)",
   variants: {
      color: {
         primary: {
            backgroundColor: "$primary500",
            "&:hover": {
               backgroundColor: "$primary400",
            },
            "&:active": {
               backgroundColor: "$primary600",
            },
         },
         secondary: {
            backgroundColor: "$secondary500",
            "&:hover": {
               backgroundColor: "$secondary400",
            },
            "&:active": {
               backgroundColor: "$secondary600",
            },
         },
         accent: {
            backgroundColor: "$accent500",
            "&:hover": {
               backgroundColor: "$accent400",
            },
            "&:active": {
               backgroundColor: "$accent600",
            },
         },
      },
      size: {
         small: {
            padding: "0.5rem 1rem",
            fontSize: "small",
         },
         medium: {
            padding: "1rem 1.5rem",
            fontSize: "medium",
         },
         large: {
            padding: "1.5rem 2rem",
            fontSize: "large",
         },
      },
   },
});

export interface ButtonProps extends Stitches.VariantProps<typeof StyledButton> {
   text: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ text, ...rest }) => {
   return <StyledButton children={text} {...rest} />;
};
