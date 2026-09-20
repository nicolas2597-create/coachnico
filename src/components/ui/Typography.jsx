export const H1 = ({ children, className = "" }) => (
  <h1 className={`text-hero-xl font-bold tracking-tight text-black ${className}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className = "" }) => (
  <h2 className={`text-h1 font-semibold text-black ${className}`}>
    {children}
  </h2>
);

export const H3 = ({ children, className = "" }) => (
  <h3 className={`text-h2 font-semibold text-black ${className}`}>
    {children}
  </h3>
);

export const Body = ({ children, className = "", size = "base" }) => {
  const sizeClasses = {
    sm: "text-small text-dark-gray-700",
    base: "text-body text-dark-gray-700",
    lg: "text-body-lg text-dark-gray-700",
  };
  return (
    <p className={`${sizeClasses[size]} ${className}`}>
      {children}
    </p>
  );
};

export const Subtitle = ({ children, className = "" }) => (
  <p className={`text-body text-gray-500 ${className}`}>
    {children}
  </p>
);

export const Label = ({ children, className = "" }) => (
  <span className={`text-small font-medium text-dark-gray-700 ${className}`}>
    {children}
  </span>
);
