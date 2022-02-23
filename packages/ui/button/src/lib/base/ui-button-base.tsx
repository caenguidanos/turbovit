import { useMemo } from "react";

import "./ui-button-base.module.scss";

export const Button: React.FunctionComponent<ButtonProps & JSX.IntrinsicElements["button"]> = ({
   styles,
   data,
   ...rest
}) => {
   let value: string = useMemo(() => data.text.toUpperCase(), [data.text]);

   let className: string = useMemo(() => {
      let cl = new Array<string>(3);

      cl.push(ButtonClassNames.Base);
      cl.push(ButtonClassNames[styles.color]);
      cl.push(ButtonClassNames[styles.size]);

      return cl.join(String.fromCharCode(0x0020));
   }, [styles.color, styles.size]);

   return <button className="btn-p-5 btn-bg-primary" children={value} {...rest} />;
};

interface ComponentProps<ComponentStyle = string, ComponentData = unknown> {
   styles: ComponentStyle;
   data?: ComponentData;
}

// --------------------------------------------------------------------------
export interface ButtonProps extends ComponentProps<ButtonStyles, ButtonData> {
   styles: ButtonStyles;
   data: {
      text: string;
   };
}

export interface ButtonData {
   text: string;
}

export interface ButtonStyles {
   color: ButtonColor;
   size: ButtonSize;
}

export enum ButtonColor {
   Primary = "primary",
   Secondary = "secondary",
   Accent = "accent",
}

export enum ButtonSize {
   Small = "sm",
   Medium = "md",
   Large = "lg",
}

export const ButtonClassNames = {
   Base: "btn",
   [ButtonColor.Primary]: "btn-primary",
   [ButtonColor.Secondary]: "btn-secondary",
   [ButtonColor.Accent]: "btn-accent",
   [ButtonSize.Small]: "btn-sm",
   [ButtonSize.Medium]: "btn-md",
   [ButtonSize.Large]: "btn-lg",
};


