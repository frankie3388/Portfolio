"use client"
import React from "react";
import Heading from "../global-components/heading";
import ContactMeForm from "./ContactMeForm";
import { useOffsetY } from "@/hooks/useOffsetY";

const ContactMe: React.FC = () => {
    const offsetY = useOffsetY();

    return(
        <section id="contact" className="flex flex-col items-center border-b-8 border-white pb-8" style={{ transform: `translateY(-${offsetY * 0.01}px)` }}>
            <Heading size='h3'>Contact Me</Heading>
            <section className="w-full flex justify-center p-5 my-5 bg-grey rounded-xl sm:w-3/4">
                <ContactMeForm />
            </section>

        </section>
    )
}

export default ContactMe;