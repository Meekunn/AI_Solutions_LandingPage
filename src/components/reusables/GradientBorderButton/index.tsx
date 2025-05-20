import "./gradient-border-button.css";

type GradientBorderButtonProps = {
  text: string;
};

const GradientBorderButton = ({ text }: GradientBorderButtonProps) => {
  return <button className="gradient-border-button" data-text={text}></button>;
};

export default GradientBorderButton;
