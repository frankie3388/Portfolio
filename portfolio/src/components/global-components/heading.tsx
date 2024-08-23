"use client"
import React from "react";

type HeadingProps = {
    size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
    className?: string;
}


const Heading: React.FC<HeadingProps> = ({ size = 'h1', children, className = '' }) => {
    const Element = size; // Dynamically set the tag type

    return(
        <Element className={`${className} p-8 text-center`}>
            {children}
        </Element>
    )
}

export default Heading;