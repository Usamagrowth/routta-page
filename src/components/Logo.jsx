import routtaLogo from '../assets/routtaLogo.png';

const Logo = ({ size = "medium" }) => {
  const sizeClasses = {
    small: "h-8 w-auto",
    medium: "h-22 w-auto",
    large: "h-14 w-auto",
  };

  return (
    <img 
      src={routtaLogo} 
      alt="Routta" 
      className={sizeClasses[size]}
    />
  );
};

export default Logo;
