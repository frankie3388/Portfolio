"use client"
import React from "react";
import Heading from "../global-components/heading";
import AboutMeCard from "./AboutMeCard";
import { useOffsetY } from "@/hooks/useOffsetY";

const AboutMe: React.FC = () => {
    const offsetY = useOffsetY();

    return(
        <section id='about' className="flex flex-col items-center border-b-8 border-white" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
            <Heading size='h3'>About Me</Heading>
            <section className="flex flex-wrap justify-center gap-10 mb-10">
                <AboutMeCard 
                    imageSrc="/images/black-white-salsa3.png"
                    altText="black and white picture of people dancing"
                    text="Personal Life" 
                    hoverImageSrc="/images/coloured-salsa-pic3.png"
                />
                <AboutMeCard 
                    imageSrc="/images/black-white-code1.png"
                    altText="black and white picture of computer screen with code"
                    text="Professional Life" 
                    hoverImageSrc="/images/code-color.png"
                />
            </section>
        </section>
    )
}

export default AboutMe;