import React from "react";


type Appearance = 'filled' | 'outline' | 'ghost';
type ButtonVariants = 'secondary' | 'primary'

interface ButtonProps {
    variant?: ButtonVariants;
    appearance?: Appearance;
    disabled?: boolean;
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
    type: "button" | "submit" | "reset";
}

const disabledColors: Record<Appearance, string> = {
    filled: `bg-white border cursor-not-allowed`,
    outline: `border border-primary-800 cursor-not-allowed bg-transparent`,
    ghost: `bg-transparent cursor-not-allowed`,
}

const variantColors: Record<ButtonVariants, Record<Appearance, string>> = {
    secondary: {
        filled: `border text-white border-white bg-customBlue-600 hover:bg-customBlue-800`,
        outline: `border text-white border-white bg-transparent hover:bg-customBlue-600`,
        ghost: `bg-transparent hover:bg-customBlue-200`,
    },
    primary: {
        filled: `border text-white border-white bg-primary-500 hover:bg-primary-600 hover:border-black hover:drop-shadow-xl`,
        outline: `border text-white border-white bg-transparent hover:bg-customPurple-600`,
        ghost: `bg-gray-400 opacity-60 hover:bg-customPurple-200`,
    }
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    appearance = 'filled',
    disabled = false,
    onClick,
    className = '',
    children,
    type,
}) => {
    const baseStyle = `px-4 py-2 rounded transition-all duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2`;
    const variantStyle = disabled ? disabledColors[appearance] : variantColors[variant][appearance];

    return(
        <button
            onClick={onClick}
            className={`${baseStyle} ${variantStyle} ${className}`}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button;