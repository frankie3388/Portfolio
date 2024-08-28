"use client"
import IntroHeading from "@/components/home/IntroHeading";
import Image from "next/image";
import AboutMe from "@/components/about-me/AboutMe";
import Projects from "@/components/projects/Projects";
import ContactMe from "@/components/contact/ContactMe";
import { useEffect, useState } from "react";
import { useOffsetY } from "@/hooks/useOffsetY";

export default function Home() {
  const offsetY = useOffsetY();

  return (
    <main>
      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center border-b-8 border-white" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
        {/* Background Image Container */}
        <div 
          className="absolute z-0 inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto w-full max-w-[1000px] h-full sm:h-[100%] md:h-[100%] lg:h-[100%]"
        >
          <Image
            src="/images/self-pic2.jpg"
            alt="picture of me"
            fill={true}
            sizes="(max-width: 768px) 100vw"
            className="opacity-40 object-cover"
          />
        </div>
        {/* Intro text container */}
        <div 
          className="relative z-10 text-white text-center"
          style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
        >
          <IntroHeading />
        </div>
      </section>
      <AboutMe />
      <Projects />
      <ContactMe />
    </main>
  );
}
