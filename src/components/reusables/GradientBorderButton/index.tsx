import { type ComponentPropsWithoutRef } from "react";
import "./gradient-border-button.css";

type GradientBorderButtonProps = {
  text: string;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

const GradientBorderButton = ({
  text,
  className,
  ...props
}: GradientBorderButtonProps) => {
  return (
    <button
      className={`gradient-border-button ${className ?? ""}`}
      {...props}
      data-text={text}
    ></button>
  );
};

export default GradientBorderButton;
