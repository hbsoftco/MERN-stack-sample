import React, { ReactNode } from "react";

type ButtonType = "primary" | "outline" | "danger"; 
interface ButtonProps {
  children?: ReactNode;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  disabled = false,
  onClick,
  type = "primary",
}) => {
  let buttonClass;

  if (type === "primary") {
    buttonClass = "bg-blue-500 hover:bg-blue-600 text-white";
  } else if (type === "outline") {
    buttonClass = "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50";
  } else if (type === "danger") {
    buttonClass = "bg-red-500 hover:bg-red-600 text-white";
  }

  return (
    <button
      className={`py-2 px-4 rounded-md ${
        disabled ? "bg-gray-300 cursor-not-allowed" : buttonClass
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children || label}
    </button>
  );
};

export default Button;
