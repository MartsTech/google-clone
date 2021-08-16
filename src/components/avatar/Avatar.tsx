interface AvatarProps {
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      loading="lazy"
      src={"/images/avatar.jpg"}
      width={40}
      height={40}
      alt="avatar"
      className={`object-contain rounded-full cursor-pointer transition duration-150 transform : ;
        hover:scale-110 animate-bounce ${className}`}
    />
  );
};

export default Avatar;
