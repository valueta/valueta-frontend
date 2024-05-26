interface ButtonProps {
  text: string;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  small?: boolean;
  medium?: boolean;
  onClick?: () => void | Promise<void> | undefined;
}

const Button = ({
  text,
  className,
  primary,
  secondary,
  type,
  onClick,
  disabled,
  small,
  medium,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center rounded-xl cursor-pointer text-sm hover:text-white disabled:cursor-no-drop disabled:bg-white disabled:border disabled:border-grey-100 disabled:text-grey-100 font-semibold ${
        small ? "h-[34px]" : "h-[60px]"
      } ${className && `${className}`} ${medium ? "w-36" : "w-full"} ${
        secondary && "bg-secondary text-white border-none"
      }`}
      type={type ? type : "submit"}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {text}
    </button>
  );
};

export default Button;
