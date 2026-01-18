import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  isActive?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  isActive = false,
  className = "",
}) => {
  const baseStyles =
    "px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95";

  const variantStyles = {
    primary: isActive
      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/50 ring-2 ring-blue-300"
      : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-md hover:shadow-lg",
    secondary: isActive
      ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg shadow-gray-500/50 ring-2 ring-gray-300"
      : "bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 shadow-md hover:shadow-lg",
    outline: isActive
      ? "border-2 border-blue-500 text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md ring-2 ring-blue-200"
      : "border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-600 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

