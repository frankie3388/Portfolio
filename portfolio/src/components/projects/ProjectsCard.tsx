"use client"
import React from "react";
import Image from "next/image";
import Heading from "../global-components/heading";
import useHover from "@/hooks/useHover";
import Link from 'next/link';

type ProjectsCardProps = {
    imageSrc: string;
    altText: string;
    text: string;
    bgHoverColor?: string;
    headingHoverColor?: string;
    width?: number;
    height?: number;
    className?: string;
    link: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
    imageSrc,
    altText, 
    text,
    bgHoverColor,
    headingHoverColor,
    className = "",
    link,
}) => {
    const { isHovered, onMouseEnter, onMouseLeave } = useHover();

    return(
        <Link href={link} className={`p-2 rounded-xl ${className} ${isHovered ? 'bg-grey transform scale-105 transition-all duration-700 cursor-pointer' : 'transition-all duration-700'}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div>
                <div className={`${isHovered ? bgHoverColor : 'bg-grey '} p-8 transition-colors duration-700 rounded-lg shadow-lg`}>
                    <div className={`${isHovered ? headingHoverColor : ''} transition-colors duration-700 items-center rounded-xl`}>
                        <Heading size='h6' className={`${isHovered ? 'border-none' : 'border-white border-2'} py-4 rounded-xl mb-5 transition-all duration-700 shadow-2xl`}>{text}</Heading>
                    </div>
                    <div className="relative w-full h-[350px] aspect-auto">
                        <Image
                            src={imageSrc}
                            alt={altText}
                            fill={true}
                            sizes="(max-width: 768px) 100vw"
                            className={`rounded-lg opacity-10 object-cover ${isHovered ? 'transform scale-105 opacity-100' : ''} transition-all duration-700 shadow-2xl`}
                        />
                    </div>
                        
                </div>
            </div>  
        </Link>
    )
}

export default ProjectsCard;