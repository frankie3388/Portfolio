import { Space_Grotesk } from 'next/font/google';
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
    weight: ['400','900'],
});

export const roboto = Roboto({ 
    subsets: ["latin"],
    variable: '--font-roboto',
    display: 'swap',
    weight: ['500', '900'],
});