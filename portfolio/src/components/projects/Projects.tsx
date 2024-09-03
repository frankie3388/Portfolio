"use client"
import React from "react";
import Heading from "../global-components/heading";
import ProjectsCard from "./ProjectsCard";
import { useOffsetY } from "@/hooks/useOffsetY";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


const projectsData = [
    {
        imageSrc: "/images/travelling diary logo.png",
        altText: "Travelling Diary",
        text: "Travelling Diary",
        bgHoverColor: "bg-customGreen-800",
        headingHoverColor: "bg-customGreen-600",
        link:"/travellingdiary",
    },
    {
        imageSrc: "/images/food-pic.jpg",
        altText: "Travelling Diary",
        text: "Food Review API",
        bgHoverColor: "bg-customPurple-700",
        headingHoverColor: "bg-customPurple-500",
        link:"/foodapi",
    },
    {
        imageSrc: "/images/quote.jpg",
        altText: "Image of a quote",
        text: "Quote Game App",
        bgHoverColor: "bg-customBlue-600",
        headingHoverColor: "bg-customBlue-400",
        link:"/quotegame",
    }
];

    

const Projects: React.FC = () => {
    const offsetY = useOffsetY();

    const cardRef1 = useScrollAnimation(); // Use hook for first card

    return(
        <section id="projects" className="flex flex-col items-center border-b-8 border-white" style={{ transform: `translateY(-${offsetY * 0.02}px)` }}>
            <Heading size='h3'>Projects</Heading>
            <section className="flex flex-wrap justify-center gap-10 mb-10 opacity-0" ref={cardRef1}>
            {projectsData.map((project, index) => (
                    <ProjectsCard
                        key={index}
                        imageSrc={project.imageSrc}
                        altText={project.altText}
                        text={project.text}
                        bgHoverColor={project.bgHoverColor}
                        headingHoverColor={project.headingHoverColor}
                        link={project.link}
                        className="sm:w-96 w-80"
                    />
                ))}
            </section>
        </section>
    )
}

export default Projects;