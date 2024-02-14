import { FC, HTMLAttributes, useRef, useState } from "react";
import { CheckBox, TextField } from "..";
import "./SelectList.scss";
import clsx from "clsx";
import useFocusOut from "@hooks/useFocusOut";
interface SelectListProps extends HTMLAttributes<HTMLDivElement> {
  options: string[];
  value?: string | string[];
  multiSelect?: boolean;
  getSelected: (selected: string) => void;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  placeholder?: string;
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
  ...other
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useFocusOut(menuRef, () => setMenuOpen(false));
  const [selected, setSelected] = useState<string | string[] | undefined>(
    value
  );
  const TextFieldProps = {
    error,
    helperText,
    required,
    disabled,
    startIcon,
    endIcon,
    placeholder,
  };
  const handleSingleSelect = (option: string) => {
    setSelected(option);
    getSelected(option);
    setMenuOpen(false);
  };
  const handleMultiSelect = (option: string) => {
    if (selected === undefined) {
      setSelected([option]);
    }
    if (Array.isArray(selected)) {
      if (selected.includes(option)) {
        setSelected(selected.filter((item) => item !== option));
      } else {
        setSelected([...selected, option]);
      }
    }
    getSelected(option);
    setMenuOpen(false);
  };
  return (
    <div className={clsx("select-list-container", className)} {...other}>
      <TextField
        className="select-list-textfield"
        {...TextFieldProps}
        onClick={() => setMenuOpen((old) => !old)}
        value={selected}
        readOnly
      />
      <ul className="select-list-menu" aria-expanded={menuOpen} ref={menuRef}>
        {!multiSelect &&
          options.map((option) => (
            <li
              key={option}
              className="menu-item"
              onClick={() => handleSingleSelect(option)}
              aria-selected={option === selected}
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
