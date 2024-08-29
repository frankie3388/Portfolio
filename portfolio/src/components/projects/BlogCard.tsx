"use client"
import React, { ReactNode } from "react";
import Image from "next/image";
import Heading from "../global-components/heading";

type BlogCardProps = {
    imageSrc: string;
    altText: string;
    text: string | ReactNode;
    headingText: string;
    width?: number;
    height?: number;
    className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
    imageSrc,
    altText, 
    text,
    headingText,
    className
}) => {
    return (
        <section className={`bg-grey rounded-xl flex flex-col justify-center items-center p-10 ${className}`}>
            <div className="relative w-full h-[300px] aspect-auto rounded-xl">
                <Image 
                    src={imageSrc}
                    alt={altText}
                    fill={true} // Ensures the image fills the container
                    sizes="(max-width: 768px) 100vw"
                    className="rounded-xl object-cover"
                />
            </div>
            <div>
                <Heading size={"h5"}>{headingText}</Heading>
                <div>
                    {text}
                </div>
            </div>
        </section>
    )
}

export default BlogCard;