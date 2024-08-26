"use client"
import Heading from "../global-components/heading";
import AboutMeCard from "./AboutMeCard";
import { useOffsetY } from "@/hooks/useOffsetY";
import React, { useState } from "react";
import PersonalLifePanel from "./PersonalLifePanel";
import ProfessionalLifePanel from "./ProfessionalLifePanel";
import { handleLinkClick } from "@/utils/helperFunctions";

const AboutMe: React.FC = () => {
    const [showPersonalLife, setShowPersonalLife] = useState(false);
    const [showProfessionalLife, setShowProfessionalLife] = useState(false);
    const offsetY = useOffsetY();

    const handlePersonalLifeClick = (sectionId: string) => {
        setShowPersonalLife(!showPersonalLife);
        if (!showPersonalLife) { // Only scroll if it's about to be shown
            handleLinkClick(sectionId);
        }
    };

    const handleProfessionalLifeClick = (sectionId: string) => {
        setShowProfessionalLife(!showProfessionalLife);
        if (!showProfessionalLife) { // Only scroll if it's about to be shown
            handleLinkClick(sectionId);
        }
    };

    return(
        <section id='about' className="flex flex-col items-center border-b-8 border-white" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
            <Heading size='h3'>About Me</Heading>
            <section className="flex flex-wrap justify-center gap-10 mb-10">
                <AboutMeCard 
                    imageSrc="/images/black-white-salsa3.png"
                    altText="black and white picture of people dancing"
                    text="Personal Life" 
                    hoverImageSrc="/images/coloured-salsa-pic3.png"
                    className="cursor-pointer"
                    onClick={() => handlePersonalLifeClick('#personal-life')} // Add onClick handler
                />
                <AboutMeCard 
                    imageSrc="/images/black-white-code1.png"
                    altText="black and white picture of computer screen with code"
                    text="Professional Life" 
                    hoverImageSrc="/images/code-color.png"
                    className="cursor-pointer"
                    onClick={() => handleProfessionalLifeClick('#professional-life')}
                />
            </section>
            {/* Conditionally render PersonalLifePanel with transition */}
            {showPersonalLife && (
                <div id="personal-life" className="transition-opacity duration-700 ease-in-out opacity-0 fade-in">
                    <PersonalLifePanel />
                </div>
            )}
            {showProfessionalLife && (
                <div id="professional-life" className="transition-opacity duration-700 ease-in-out opacity-0 fade-in">
                    <ProfessionalLifePanel />
                </div>
            )}
        </section>
    )
}

export default AboutMe;