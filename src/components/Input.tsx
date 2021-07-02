interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
  return <input type="textbox" placeholder={placeholder} />;
};

export default Input;
