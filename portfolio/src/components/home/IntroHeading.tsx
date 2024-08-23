import React from "react";
import { spaceGrotesk } from '@/styles/fonts';
import { poppins } from '@/styles/fonts';


const IntroHeading: React.FC = () => {
    return (
        <div className="flex flex-col justify-between h-screen text-center">
            <div className="mt-20">
                <h1 className={`${spaceGrotesk.variable} font-space-grotesk`}>HELLO, I AM</h1>
                <div className="mt-10 pt-10">
                    <p className="text-right pr-20 mr-10">FRANCIS LAM</p>
                    <h1 
                    className={`${poppins.variable} font-poppins`}
                    style={{
                        WebkitTextStroke: '2px var(--primary-600)',  // Outline
                        color: 'transparent',           // Transparent text
                        WebkitTextFillColor: 'transparent', // For Safari support
                        letterSpacing: '0.05em',        // Adjust spacing here
                      }}
                    >FRANKI<span className="relative text-transparent animate-flicker">E</span></h1>
                </div>
            </div>
            <h2 className="mb-20">FULLSTACK WEB DEVELOPER</h2>
        </div>
    );
}

export default IntroHeading;