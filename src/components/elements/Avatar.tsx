interface AvatarProps {
  url: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile"
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform 
      hover:scale-110 animate-bounce ${className}`}
    />
  );
};

export default Avatar;
