import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const Section = ({
  children,
  id,
  className = "",
  animation = "fade-in",
  threshold = 0.1,
}) => {
  const [ref, isVisible] = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  const animationClasses = {
    "fade-in": isVisible ? "animate-fade-in-up" : "opacity-0",
    "blur-focus": isVisible ? "animate-blur-focus" : "opacity-0 blur-sm",
    "scale-in": isVisible ? "animate-scale-in" : "opacity-0 scale-95",
    none: "",
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`
        section
        transition-all duration-700
        ${animationClasses[animation]}
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default Section;
