import { useRef, useEffect, useState } from "react";

export const Image = ({
  src,
  alt = "Image",
  className = "",
  blurUp = true,
  ...props
}) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Use IntersectionObserver for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = src;
            img.onload = () => setIsLoaded(true);
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "50px" }
    );

    observer.observe(img);

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      alt={alt}
      className={`
        ${blurUp ? "image-blur-load" : ""}
        ${isLoaded ? "loaded" : ""}
        ${className}
      `}
      {...props}
    />
  );
};

export default Image;
