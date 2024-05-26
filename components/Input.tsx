import { useState, useContext, ChangeEvent, FocusEvent } from "react";
import Icon from "./Icon";
interface InputProps {
  type: string;
  label?: string;
  id?: string;
  className?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  //   onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
  maxLength?: number | undefined;
  numberOnly?: boolean;
  getFormElements?: () => void;
}

const Input = ({
  type,
  onChange,
  label,
  id,
  className,
  name,
  value,
  placeholder,
  autoFocus,
  readOnly,
  maxLength,
  numberOnly,
  ...restProps
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNumberInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    const isCmdOrCtrlV = (e.metaKey || e.ctrlKey) && key === "v";

    if (numberOnly && !isCmdOrCtrlV) {
      // Allow only numeric characters (0-9) and backspace
      if (!/^[0-9]$/.test(key) && key !== "Backspace") {
        e.preventDefault();
      }
    }
  };

  return (
    <div>
      <label className="text-secondary font-medium text-[14px]/[13px] tracking-tight">
        <div className="flex justify-between mr-1">
          <span className="text-xs text-secondary inline-block pb-2">
            {label}
          </span>
        </div>

        <div className={`pb-5 ${type === "password" && "relative"}`}>
          <input
            className={`rounded-xl font-medium bg-[#F8F8F8] pl-4 box-border placeholder:text-sm placeholder:tracking-normal outline-none border-0 w-full h-14 ${
              type === "password" && !showPassword
                ? "text-lg tracking-wider"
                : "text-base"
            } ${className}`}
            id={id}
            type={showPassword ? "text" : type}
            name={name}
            value={value}
            //   defaultValue={defaultValue}
            onChange={onChange}
            //   onBlur={(e) => {
            //     formik && formik.handleBlur(e);
            //     getFormElements && getFormElements();
            //   }}
            placeholder={placeholder}
            onKeyDown={handleNumberInput}
            autoFocus={autoFocus}
            maxLength={maxLength}
            readOnly={readOnly}
            {...restProps}
          />
          {type === "password" && (
            <Icon
              name="eye-on"
              className="cursor-pointer absolute top-[22%] left-[85%] md:left-[89%]"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
      </label>
      {/* <div>
          {hasError && (
            <span className="text-danger inline-block text-sm font-semibold pt-1">
              {typeof errorMessage === "string" && errorMessage}
            </span>
          )}
        </div> */}
    </div>
  );
};

export default Input;
