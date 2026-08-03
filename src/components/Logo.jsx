import routtaLogo from '../assets/routtaLogo.png';

const Logo = ({ size = "medium" }) => {
  const sizeClasses = {
    small: "h-8 w-auto",
    medium: "h-28 w-auto",
    large: "h-34 w-auto",
  };

  return (
    <a href="#hero">
    <img 
      src={routtaLogo} 
      alt="Routta" 
      className={sizeClasses[size]}
    />
    </a>
  );
};

export default Logo;
