import { FunctionComponent } from "react";
import "./Button.css";

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
