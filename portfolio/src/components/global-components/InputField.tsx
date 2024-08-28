"use client"
import React from "react";

type InputFieldProps = {
    placeholder: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    type?: string;
};

const InputField: React.FC<InputFieldProps> = ({
    placeholder,
    className = "",
    value,
    onChange,
    name,
    type,
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`border p-2 rounded-md w-full my-2 text-black ${className}`}
            value={value}
            onChange={onChange}
            name={name}
        />
    );
};

export default InputField;
