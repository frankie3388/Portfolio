"use client"
import React from "react";
import Heading from "@/components/global-components/heading";
import Image from "next/image";

export default function FoodApi() {
    return(
        <main className="flex flex-col items-center">
            <Heading size={"h2"}>Foodie API</Heading>
            <div className="relative flex items-center justify-center w-5/6 h-[600px] p-5 sm:p-20 bg-white rounded-xl">
                <Image 
                  src={"/images/food-pic.jpg"} 
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
                            Coder Academy API Project
                        </li>
                        <li className="pt-5">
                            <a 
                                href="https://github.com/frankie3388/Foodie_api" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="underline text-primary-300 hover:text-white"
                            >
                                Link to Github Repo
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="px-10 pt-10">
                    <Heading size={"h5"} className="p-1 pb-5">Overview</Heading>
                    <p>
                        The purpose of this application is to provide a platform for users
                        to find information about a restaurant such as food reviews from 
                        other users, cuisine, address, etc.. Users will be able to find restaurants 
                        based on the ratings given to them from other users. 
                        It lets the user create a favourites list which they can add any restaurant 
                        they like to their list. It is an application that is made for foodies.
                        This application was built with Python and the Flask framework.
                    </p>
                </div>
            </section>
        </main>
    )
}