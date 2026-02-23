import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseStyles = "font-bold py-3 px-8 rounded transition-all duration-300 uppercase tracking-wider text-sm md:text-base flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-zcase-accent hover:bg-zcase-accentHover text-white shadow-lg shadow-zcase-accent/20 disabled:hover:bg-zcase-accent disabled:shadow-none",
    secondary: "bg-white text-zcase-black hover:bg-gray-200 disabled:hover:bg-white",
    outline: "border-2 border-white hover:bg-white hover:text-zcase-black text-white bg-transparent disabled:hover:bg-transparent disabled:hover:text-white",
  };

  return (
    <button 
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
