import React from "react";
import { handleLinkClick } from "@/utils/helperFunctions";

interface DropdownMenuProps {
    toggleMenu: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ toggleMenu }) => {

    const handleMenuClick = (sectionId: string) => {
        toggleMenu(); // Close the menu
        handleLinkClick(sectionId);
    };

    return (
        // <div className="sm:hidden fixed inset-0 top-16 bg-white bg-opacity-90 ml-4 rounded-xl text-black h-1/4 w-1/4 flex flex-col items-center z-20 hover:cursor-pointer">
            <nav className="pt-6 sm:hidden fixed inset-0 top-16 bg-white bg-opacity-90 ml-4 rounded-xl text-black h-1/4 w-1/4 flex flex-col items-center z-20 hover:cursor-pointer">
                <ul className="flex flex-col gap-4 w-full items-center">
                    <li className='w-full hover:bg-gray-400 text-center py-1' onClick={() => handleMenuClick('#home')}>
                        Home
                    </li>
                    <li className='w-full hover:bg-gray-400 text-center py-1' onClick={() => handleMenuClick('#about')}>
                        About Me
                    </li>
                    <li className='w-full hover:bg-gray-400 text-center py-1' onClick={() => handleMenuClick('#projects')}>
                        Projects
                    </li>
                    <li className='w-full hover:bg-gray-400 text-center py-1' onClick={() => handleMenuClick('#contact')}>
                        Contact
                    </li>
                </ul>
            </nav>
        // </div>
    )
}

export default DropdownMenu;