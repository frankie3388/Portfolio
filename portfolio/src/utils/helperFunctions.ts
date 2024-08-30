export const handleLinkClick = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

// Utility function to calculate opacity based on scroll position
export const calculateOpacity = (offsetY: number, maxScroll: number = 500): number => {
    // Max scroll value to start fading (adjust this value as needed)
    const opacity = Math.max(0.1, 0.7 - offsetY / maxScroll) // Decrease opacity as you scroll down
    return opacity;
  };