export const Button = ({
  children,
  href,
  onClick,
  className = "",
  variant = "solid",
  size = "md",
  external = false,
  ...props
}) => {
  const variantClasses = {
    solid: "bg-red-primary text-white hover:bg-red-dark",
    outline: "border-2 border-white/30 text-white hover:border-white",
    ghost: "text-white hover:text-red-primary",
  };

  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm font-semibold",
    md: "px-8 py-3.5 text-base font-semibold",
    lg: "px-10 py-4 text-lg font-semibold",
  };

  const combinedClasses = `
    inline-flex items-center justify-center
    rounded-full
    transition-all duration-300
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={combinedClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
