import { FC, HTMLProps } from "react";
import "./TextField.scss";
import clsx from "clsx";
interface TextFieldProps extends HTMLProps<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextField: FC<TextFieldProps> = (props) => {
  const { error, helperText, startIcon, endIcon, ...other } = props;
  return (
    <div className={clsx("input-container", error && "error", props.className)}>
      <div>
        {startIcon && <span className="start-icon">{startIcon}</span>}
        <input type="text" {...other} />
        {endIcon && <span className="end-icon">{endIcon}</span>}
      </div>
      {helperText && <p className="helper-text">{helperText}</p>}
    </div>
  );
};

export default TextField;
