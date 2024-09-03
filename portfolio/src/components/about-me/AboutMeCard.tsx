"use client";
import React from "react";
import Image from "next/image";
import Heading from "../global-components/heading";

type AboutMeCardProps = {
    imageSrc: string;
    hoverImageSrc: string;
    altText: string;
    text: string;
    className?: string;
    onClick?: () => void;
};

// Correct usage of React.forwardRef
const AboutMeCard = React.forwardRef<HTMLDivElement, AboutMeCardProps>(
  ({ imageSrc, hoverImageSrc, altText, text, className = "", onClick }, ref) => {
    return (
      <section 
        className={`group bg-grey rounded-lg sm:w-[42rem] sm:h-[22rem] w-[22rem] h-[12rem] relative flex justify-center items-center hover:cursor-pointer opacity-0 ${className}`}
        onClick={onClick}
        ref={ref}
      >
        <div className="relative w-5/6 h-5/6 bg-grey p-8 rounded-lg shadow-lg flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={altText}
            fill={true}
            sizes="(max-width: 768px) 100vw"
            className="rounded-lg object-cover transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
          />
          <Image
            src={hoverImageSrc}
            alt={altText}
            fill={true}
            sizes="(max-width: 768px) 100vw"
            className="rounded-lg object-cover transition-opacity duration-300 ease-in-out absolute opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Heading size="h5">{text}</Heading>
        </div>
      </section>
    );
  }
);

// Adding a display name for better debugging
AboutMeCard.displayName = "AboutMeCard";

export default AboutMeCard;

