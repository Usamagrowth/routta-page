
const Button = ({ children, variant = "primary", size = "md", className = "", onClick, href }) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg",
    secondary: "bg-white text-emerald-600 hover:bg-gray-100 border border-gray-200",
    outline: "border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-emerald-600",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
