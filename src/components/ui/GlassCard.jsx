export const GlassCard = ({ children, className = "", variant = "light" }) => {
  const variantClasses = {
    light: "glass-morphism",
    dark: "glass-dark",
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
