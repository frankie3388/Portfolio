// Navbar.tsx
"use client"
import { FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaBriefcase } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import React, { useState } from "react";
import Link from 'next/link';
import NavbarItem from "../navbar/navbarItem";
import useHover from "@/hooks/useHover";
import DropdownMenu from "../global-components/dropdownMenu";
import { handleLinkClick } from "@/utils/helperFunctions";

const Navbar = () => {
    const { isHovered, onMouseEnter, onMouseLeave } = useHover();
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => setOpenMenu(!openMenu);

    return (
        <div className="z-20">
            {/* Hamburger Icon for small screens */}
            <div className="sm:hidden fixed top-0 left-0 m-4 z-20">
                <RxHamburgerMenu className="text-5xl hover:cursor-pointer" onClick={toggleMenu}/>   
            </div>

            {/* Full Navbar for medium screens and above */}
            <div
                className={`h-1/2 ${isHovered ? 'w-40' : 'w-20'} bg-transparent text-white flex flex-col fixed transition-all duration-300 z-10 hidden sm:flex hover:cursor-pointer`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <nav className="flex-1">
                    <ul>
                        <NavbarItem icon={<FaHome />} onClick={() => handleLinkClick('#home')}>
                            Home
                        </NavbarItem>
                        <NavbarItem icon={<ImProfile />} onClick={() => handleLinkClick('#about')}>
                            About Me
                        </NavbarItem>
                        <NavbarItem icon={<FaBriefcase />} onClick={() => handleLinkClick('#projects')}>
                            Projects
                        </NavbarItem>
                        <NavbarItem icon={<MdOutlineEmail />} onClick={() => handleLinkClick('#contact')}>
                            Contact
                        </NavbarItem>
                    </ul>
                </nav>
                {/* Ensure border is at the bottom of the Navbar */}
                {/* <div className="w-full border-b-8 border-white h-80"></div> */}
            </div>

            {/* Dropdown Menu */}
            {openMenu && <DropdownMenu toggleMenu={toggleMenu} />}
        </div>
        
    )
}

export default Navbar;