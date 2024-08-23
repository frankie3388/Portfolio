"use client"
import React from "react";
import Heading from "../global-components/heading";

const PersonalLifePanel: React.FC = () => {

    return(
        <section className="border-white border-2">
            <Heading size={"h3"} children={'Personal Life'} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-8">
                <div>1</div>
                <div>1</div>
                <div>1</div>

            </div>
            {/* <section className="grid grid-cols-3 gap-4">
                <div className="border-white border-2 col-span-1">1</div>
                <div className="border-white border-2">2</div>
                <div className="border-white border-2">3</div>

            </section> */}
        </section>
        
    )
}

export default PersonalLifePanel;