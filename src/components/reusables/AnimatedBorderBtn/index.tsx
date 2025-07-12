import "./animated-border-btn.css";
import { type ComponentPropsWithoutRef } from "react";

type AnimatedBorderButtonProps = {
  label: string;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

const AnimatedBorderBtn = ({
  label,
  className,
  ...props
}: AnimatedBorderButtonProps) => {
  return (
    <button className={`btn ${className ?? ""}`} {...props}>
      <div className="border-line border-bottom"></div>
      <div className="border-line border-left"></div>
      <div className="border-line border-right"></div>
      <div className="border-line border-top"></div>
      <span className="spn">{label}</span>
    </button>
  );
};

export default AnimatedBorderBtn;
