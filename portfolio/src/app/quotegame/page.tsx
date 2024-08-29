"use client"
import React from "react";
import Heading from "@/components/global-components/heading";
import Image from "next/image";

export default function QuoteGame() {
    return(
        <main className="flex flex-col items-center">
            <Heading size={"h2"}>Quote Game Application</Heading>
            <div className="relative flex items-center justify-center w-5/6 h-[600px] p-5 sm:p-20 bg-white rounded-xl">
                <Image 
                  src={"/images/quote.jpg"} 
                  alt={"Image of Travelling Diary logo"} 
                  fill={true}
                  sizes="(max-width: 768px) 100vw"
                  className="relative object-cover aspect-auto rounded-xl"
                />
            </div>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 md:px-8">
                <div className="px-10 pt-10 flex justify-center">
                    <ul className="list-disc text-xl">
                        <li className="pt-5">
                            Hackathon React Project
                        </li>
                        <li className="pt-5">
                            <a 
                                href="https://github.com/frankie3388/quote-game-app?tab=readme-ov-file" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="underline text-primary-300 hover:text-white"
                            >
                                Link to Github Repo
                            </a>
                        </li>
                        <li className="pt-5">
                            <a 
                                href="https://lucent-conkies-bb05c9.netlify.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="underline text-primary-300 hover:text-white"
                            >
                                Link to Quote Game App
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="px-10 pt-10">
                    <Heading size={"h5"} className="p-1 pb-5">Overview</Heading>
                    <p>
                        This is a quote game application. The home page displays a 
                        random quote upon loading. You can search for a quote by a 
                        famous person on the homepage.
                        On the Game Page of the application, a random quote is displayed 
                        with a missing word. You are to enter in the missing word. 
                        You can also, generate a new quote by clicking on the 
                        &quot;Generate new quote&quot; button. This is still a work in progress. 
                        Haven&apos;t finished the styling of the application. 
                        The purpose of building this application was to familiarise myself with React concepts.
                    </p>
                </div>
            </section>
        </main>
    )
}