"use client"
import React from "react";
import Heading from "@/components/global-components/heading";
import Image from "next/image";
import BlogCard from "@/components/projects/BlogCard";
import { useOffsetY } from "@/hooks/useOffsetY";

export default function TravellingDiary() {
  const offsetY = useOffsetY();

  return (
    <main className="flex flex-col items-center">
        <Heading size={"h2"}>Travelling Diary</Heading>
        <div className="flex items-center justify-center w-5/6 h-1/2 p-5 sm:p-20 bg-white rounded-xl">
          <Image 
            src={"/images/travelling diary logo.png"} 
            alt={"Image of Travelling Diary logo"} 
            width={400}
            height={300}
          />
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 md:px-8 z-20" style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
          <div className="px-10 pt-10 flex justify-center bg-gray-600 bg-opacity-70 rounded-xl pb-10">
              <ul className="list-disc text-xl">
                <li className="pt-5">
                  Coder Academy Final Project
                </li>
                <li className="pt-5">
                  Team Members (Francis Lam & Patrick Apilukpuvadol)
                </li>
                <li className="pt-5">
                  <a 
                    href="https://dulcet-unicorn-920c44.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline text-primary-300 hover:text-white"
                  >
                    Link to website - Travelling Diary
                  </a>
                </li>
                <li className="pt-5">
                  <a 
                    href="https://github.com/frankie3388/t3-finalproject-frontend?tab=readme-ov-file" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline text-primary-300 hover:text-white"
                  >
                    Link to Github Repo - Travelling Diary
                  </a>
                </li>
              </ul>
          </div>
          <div className="px-10 pt-10 bg-gray-600 bg-opacity-70 rounded-xl pb-10">
            <Heading size={"h5"} className="p-1 pb-5">Overview</Heading>
            <p>
              The purpose of this application is to allow users to log and share their experiences from their travels. 
              As well as to allow clients to login and manage the content of the posts. This application is made for people looking 
              for travel tips and new expierences. This application was built with MERN stack.
            </p>
          </div>
        </section>
        <section className="relative w-screen h-[300px] md:h-[600px] my-20 bg-white opacity-50">
          <Image 
            src={"/images/travelling-diary.png"} 
            alt={"Image of the travelling diary app"} 
            fill={true}
            className="object-contain"
          />
        </section>
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-8 md:mx-20 lg:mx-40">
          <BlogCard 
            imageSrc={'/images/trelloboard.png'}
            altText={'image of trello board'}
            headingText={'Planning'}
            text={
              `At the beginning of the project we had a briefing to delegate tasks and design a rough idea of how the app works. 
              We then used Trello as a workload planner to organise and prioritise taks. We were responsible for ensuring that we 
              completed appointed tasks in a timely manner and ensured we added notes to encourage communication during our regular 
              meetings.`
            }
          />
          <BlogCard 
            imageSrc={'/images/wireframes.png'}
            altText={'image of wireframe'}
            headingText={'Wireframes'}
            text={
              `A mobile first approach was implemented when designing the wireframes for this application. 
              We wanted a light-coloured themed interface for the application that was easy to use. 
              Based on this criteria, we chose to use the colours white, black and two different shades of orange.`
            }
            className={'relative xl:top-10'}
          />
          <BlogCard 
            imageSrc={'/images/login-screen.png'}
            altText={'image of login screen'}
            headingText={'Features'}
            text={
              <ul className="list-disc list-inside">
                <li>User Authentication - Create account and Login</li>
                <li>Create, update and delete Blogs</li>
                <li>Search for Blogs by location or username</li>
              </ul>
            }
          />
          <BlogCard 
            imageSrc={'/images/tech-stack.jpg'}
            altText={'image of tech stack'}
            headingText={'Tech Stack'}
            text={
              <ul className="list-disc list-inside">
                <li>React</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Amazon S3</li>
                <li>React Bootstrap</li>
              </ul>
            }
            className={'relative top-0 left-0 xl:top-10'}
          />
        </section>
    </main>
  );
}
