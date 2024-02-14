import { FC, HTMLAttributes, useRef, useState } from "react";
import { CheckBox, TextField } from "..";
import "./SelectList.scss";
import clsx from "clsx";
import useFocusOut from "@hooks/useFocusOut";
interface SelectListProps extends HTMLAttributes<HTMLDivElement> {
  options: string[];
  value?: string | string[];
  multiSelect?: boolean;
  getSelected: (selected: string | string[]) => void;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  placeholder?: string;
  name?: string;
}
export const SelectList: FC<SelectListProps> = ({
  options,
  value,
  multiSelect,
  getSelected,
  id,
  className,
  error,
  helperText,
  required,
  disabled,
  startIcon,
  endIcon,
  placeholder,
  name,
  ...other
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useFocusOut(menuRef, () => setMenuOpen(false));
  const TextFieldProps = {
    error,
    helperText,
    required,
    disabled,
    startIcon,
    endIcon,
    placeholder,
    name,
  };
  const handleSingleSelect = (option: string) => {
    getSelected(option);
    setMenuOpen(false);
  };
  const handleMultiSelect = (option: string) => {
    if (value === undefined) {
      getSelected([option]);
    }
    if (Array.isArray(value)) {
      if (value.includes(option)) {
        getSelected(value.filter((item) => item !== option));
      } else {
        getSelected([...value, option]);
      }
    }
    setMenuOpen(false);
  };
  return (
    <div className={clsx("select-list-container", className)} {...other}>
      <TextField
        className="select-list-textfield"
        {...TextFieldProps}
        onClick={() => setMenuOpen((old) => !old)}
        value={value}
        readOnly
      />
      <ul className="select-list-menu" aria-expanded={menuOpen} ref={menuRef}>
        {!multiSelect &&
          options.map((option) => (
            <li
              key={option}
              className="menu-item"
              onClick={() => handleSingleSelect(option)}
              aria-selected={option === value}
            >
              {option}
            </li>
          ))}
        {multiSelect &&
          options.map((option) => (
            <CheckBox
              label={option}
              id={id + option}
              onSelect={() => handleMultiSelect(option)}
            />
          ))}
      </ul>
    </div>
  );
};
