import { FunctionComponent } from "react";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input: FunctionComponent<InputProps> = (props) => {
  return <input type="textbox" {...props} />;
};

export default Input;
