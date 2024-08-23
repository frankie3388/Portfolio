"use client"
import React from "react";
import Image from "next/image";
import Heading from "../global-components/heading";
import useHover from "@/hooks/useHover";

type ProjectsCardProps = {
    imageSrc: string;
    altText: string;
    text: string;
    bgHoverColor?: string;
    headingHoverColor?: string;
    width?: number;
    height?: number;
    className?: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
    imageSrc,
    altText, 
    text,
    bgHoverColor,
    headingHoverColor,
    width = 385,
    height = 385,
    className = ""
}) => {
    const { isHovered, onMouseEnter, onMouseLeave } = useHover();

    return(
        <section className={`p-2 rounded-xl ${className} ${isHovered ? 'bg-grey transform scale-105 transition-all duration-700 cursor-pointer' : 'transition-all duration-700'}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            <div>
                <div className={`${isHovered ? bgHoverColor : 'bg-grey '} p-8 transition-colors duration-700 rounded-lg shadow-lg`}>
                    <div className={`${isHovered ? headingHoverColor : ''} transition-colors duration-700 items-center rounded-xl`}>
                        <Heading size='h6' className={`${isHovered ? 'border-none' : 'border-white border-2'} py-4 rounded-xl mb-5 transition-all duration-700 shadow-2xl`}>{text}</Heading>
                    </div>
                        <Image
                            src={imageSrc}
                            alt={altText}
                            width={width}
                            height={height}
                            className={`rounded-lg opacity-10 ${isHovered ? 'transform scale-105 opacity-100' : ''} transition-all duration-700 shadow-2xl`}
                        />
                </div>
            </div>  
        </section>
    )
}

export default ProjectsCard;