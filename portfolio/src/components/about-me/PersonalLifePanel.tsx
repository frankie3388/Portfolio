"use client"
import React, { useEffect } from "react";
import Heading from "../global-components/heading";
import Image from "next/image";
import { handleLinkClick } from "@/utils/helperFunctions";

const PersonalLifePanel: React.FC = () => {
    useEffect(() => {
        handleLinkClick('#personal-life');
    }, []);

    return(
        <section id="personal-life" className="shadow-xl shadow-primary-400 rounded-xl lg:mx-20 bg-primary-400 pb-20 md:px-10 mb-10">
            <Heading size={"h3"} children={'Personal Life'} />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 mt-8 px-8">
                <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-[-6deg] col-span-2">
                    <Heading size={"h5"} children={'My background'} className="text-black pt-2"/>
                    <p className="text-black">
                        Hello, my name is Francis (aka. Frankie). I'm an Australian-born
                        Chinese, currently living in Brisbane, Queensland. With a
                        background in Food Technology, I've discovered a profound passion
                        for creating websites and applications. My journey into web
                        development is not just a learning experience; it's a transformative
                        career change I'm eagerly pursuing.
                    </p>
                </div>
                <div className="relative flex items-center justify-center hidden lg:flex">
                    <Image
                        src="/images/gaming.jpg" // Replace with your image path
                        alt="Gaming"
                        fill={true}
                        sizes="(max-width: 768px) 100vw"
                        className="rounded-lg shadow-lg transform rotate-[6deg] object-cover"
                    />
                </div>
                <div className="space-y-8 col-span-2">
                    {/* Other Passions / Hobbies */}
                    <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-[3deg] text-black">
                    <Heading size={"h5"} children={'Other Passions / Hobbies'} className="pt-2"/>
                        <ul className="list-disc list-inside">
                        <li>Salsa Dancing</li>
                        <li>Video Gaming</li>
                        <li>Foodie</li>
                        <li>Movies</li>
                        </ul>
                    </div>
                    {/* Education */}
                    <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-[-3deg] text-black">
                    <Heading size={"h5"} children={'Education'} className="pt-2"/>
                        <ul className="list-disc list-inside">
                            <li>Bachelor of Food Technology - 2007</li>
                            <li>Diploma of IT (Web Development) - 2023</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
        
    )
}

export default PersonalLifePanel;