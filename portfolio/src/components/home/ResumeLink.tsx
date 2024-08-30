"use client";

import React from "react";
import { FaDownload } from "react-icons/fa6";

interface ResumeLinkProps {
    className?: string;
}

const ResumeLink: React.FC<ResumeLinkProps> = ({ className }) => (
    <a
        href="/files/resume.pdf" // Replace with the actual path to your resume
        className={`flex absolute top-5 right-5 hover:cursor-pointer p-2 z-30 text-xl sm:text-3xl ${className}`}
        target="_blank"
        rel="noopener noreferrer"
    >
        <FaDownload />
        <span className="px-5">RESUME</span>
    </a>
);

export default ResumeLink;