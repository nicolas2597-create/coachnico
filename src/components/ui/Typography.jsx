export const H1 = ({ children, className = "" }) => (
  <h1 className={`font-black tracking-tight ${className}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className = "" }) => (
  <h2 className={`font-black tracking-tight ${className}`}>
    {children}
  </h2>
);

export const H3 = ({ children, className = "" }) => (
  <h3 className={`font-bold tracking-tight ${className}`}>
    {children}
  </h3>
);

export const Body = ({ children, className = "", size = "base" }) => {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };
  return (
    <p className={`${sizeClasses[size]} ${className}`}>
      {children}
    </p>
  );
};

export const Subtitle = ({ children, className = "" }) => (
  <p className={`text-lg font-light ${className}`}>
    {children}
  </p>
);

export const Label = ({ children, className = "" }) => (
  <span className={`text-sm font-semibold uppercase tracking-widest ${className}`}>
    {children}
  </span>
);
