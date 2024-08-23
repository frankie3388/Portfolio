"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Create the context with a default value
const OffsetYContext = createContext<number>(0);

// Interface for the provider props
interface OffsetYProviderProps {
  children: ReactNode;
}

// The provider component
export const OffsetYProvider: React.FC<OffsetYProviderProps> = ({ children }) => {
  const [offsetY, setOffsetY] = useState<number>(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <OffsetYContext.Provider value={offsetY}>
      {children}
    </OffsetYContext.Provider>
  );
};

// Hook to use the context
export const useOffsetY = (): number => useContext(OffsetYContext);
