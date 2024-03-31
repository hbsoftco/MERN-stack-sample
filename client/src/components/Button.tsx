import React, { ReactNode } from "react";

type ButtonType = "primary" | "outline";

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
  const buttonClass =
    type === "primary"
      ? "bg-blue-500 hover:bg-blue-600 text-white"
      : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50";

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
