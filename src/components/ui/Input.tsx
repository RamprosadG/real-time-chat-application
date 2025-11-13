import React from "react";

interface InputProps {
  type?: "text" | "number" | "email" | "password";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`
        w-full px-4 py-3 
        border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
        transition-all duration-200 
        disabled:bg-gray-100 disabled:cursor-not-allowed
        bg-white
        ${className}
      `}
    />
  );
};

export default Input;
