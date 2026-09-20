import { useRef, useEffect, useState } from "react";

export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top;
      const windowHeight = window.innerHeight;

      // Only apply parallax if element is in view
      if (elementTop < windowHeight && elementTop > -elementRect.height) {
        const offset = (windowHeight - elementTop) * speed;
        setYOffset(offset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return [ref, yOffset];
};

export default useParallax;
