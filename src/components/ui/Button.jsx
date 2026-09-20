export const Button = ({
  children,
  href,
  onClick,
  className = "",
  variant = "glass",
  size = "md",
  external = false,
  ...props
}) => {
  const variantClasses = {
    glass: "glass-button text-black hover:shadow-lg",
    solid: "bg-black text-white hover:bg-dark-gray-700 transition-colors duration-300",
    outline: "border-2 border-black text-black hover:bg-light-gray-100 transition-colors duration-300",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-small font-medium rounded-lg",
    md: "px-6 py-3 text-body font-medium rounded-xl",
    lg: "px-8 py-4 text-body font-semibold rounded-2xl",
  };

  const combinedClasses = `
    inline-flex items-center justify-center
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
