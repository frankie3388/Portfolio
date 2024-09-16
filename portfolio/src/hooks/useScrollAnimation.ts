import { useRef, useEffect } from "react";

export const useScrollAnimation = (threshold = 0.2) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("fade-in");
          console.log("working");
          // Optionally, you can unobserve the element after animation starts
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      // Unobserve element before disconnecting
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return elementRef;
};
