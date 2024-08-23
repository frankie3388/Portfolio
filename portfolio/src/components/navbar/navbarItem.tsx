// NavbarItem.tsx
import React from 'react';
import Link from 'next/link';

interface NavbarItemProps {
    icon: React.ReactNode;
    children: React.ReactNode;
    iconSize?: string; // Optional prop to control icon size
    onClick: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ icon, children, iconSize = "text-3xl", onClick}) => (
    <li className="group hover:bg-gray-700 text-center m-3 p-3 rounded-xl mt-10 relative">
        <div className="flex items-center justify-center" onClick={onClick}>
            <span className={`${iconSize} transition-opacity duration-300 group-hover:opacity-0`}>
                {icon}
            </span>
            <span className="absolute opacity-0 text-2xl group-hover:opacity-100 transition-opacity duration-300">
                {children}
            </span>
        </div>
    </li>
);

export default NavbarItem;
