"use client"
import React, { useEffect } from "react";
import Heading from "../global-components/heading";
import Image from "next/image";
import { FaJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { handleLinkClick } from "@/utils/helperFunctions";

const ProfessionalLifePanel: React.FC = () => {
    useEffect(() => {
        handleLinkClick('#professional-life');
    }, []);

    return(
        <section id="professional-life" className="shadow-xl shadow-customPink-500 rounded-xl lg:mx-20 bg-customPink-500 pb-20 md:px-10 mb-10">
            <Heading size={"h3"} children={'Professional Life'} />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 mt-8 px-8">
                <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2 col-span-3">
                    <Heading size={"h5"} children={'My background'} className="text-black pt-2"/>
                    <p className="text-black">
                        I have 10 years of experience in the Food Manufacturing Industry, specifically in Quality Assurance.
                        I'm excited to merge my past experiences with my newfound skills and embark on a fulfilling
                        journey in the world of web development, where I aspire to create meaningful and user-friendly 
                        digital experiences.  
                    </p>
                </div>
                <div className="space-y-8 col-span-3">
                    {/* Other Passions / Hobbies */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
                    <Heading size={"h5"} children={'Experience'} className="pt-2"/>
                        <ul className="list-disc list-inside">
                            <li className="flex justify-between">
                                <span>Intern - Software Engineer (Epsilon)</span>
                                <span>2024</span>
                            </li>
                            <li className="flex justify-between mt-3">
                                <span>QA Lead (Comgroup Supplies)</span>
                                <span>2017 - 2018</span>
                            </li>
                            <li className="flex justify-between mt-3">
                                <span>QA Technologist (Comgroup Supplies)</span>
                                <span>2013 - 2017</span>
                            </li>
                        </ul>
                    </div>
                    {/* Skills */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
                    <Heading size={"h5"} children={'Tech Stack Skillset'} className="pt-2"/>
                        <div className="flex flex-wrap text-5xl gap-5 justify-center">
                            <FaJs />
                            <FaCss3Alt />
                            <FaHtml5 />
                            <FaPython />
                            <FaGitAlt />
                            <FaNode />
                            <FaReact />
                            <RiNextjsFill />
                            <BiLogoTypescript />
                        </div>
                    </div>

                </div>
            </div>
        </section>
        
    )
}

export default ProfessionalLifePanel;