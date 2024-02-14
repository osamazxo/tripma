import clsx from "clsx";
import { FC } from "react";
import "./Button.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  state?: "active" | "disabled" | "error";
  icon?: React.ReactNode;
}
export const Button: FC<ButtonProps> = ({
  size = "md",
  variant = "primary",
  children,
  icon,
  state,
  type,
  ...other
}) => {
  return (
    <button
      className={clsx("button", variant, size, state)}
      {...other}
      disabled={state === "disabled"}
      type={type}
    >
      <span>{children}</span>
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};
