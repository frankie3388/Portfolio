// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

interface FooterProps {
  backgroundColor?: string;
  iconColor?: string;
  size?: string;
}

const Footer: React.FC<FooterProps> = ({
  backgroundColor = 'transparent',
  iconColor = 'text-white',
  size = 'text-4xl',
}) => {
  return (
    <footer className={`p-4 ${backgroundColor} flex`}>
      <div className="flex space-x-4">
        <Link href="www.linkedin.com/in/francis-lam-60a6a979" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className={`${iconColor} ${size} mx-4`} />
        </Link>
        <Link href="https://github.com/frankie3388" target="_blank" rel="noopener noreferrer">
          <FaGithub className={`${iconColor} ${size} mx-4`} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
