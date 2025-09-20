import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  const IconComponent = icon.Icon; // store the component in a capitalized variable

  return (
    <div className="flex-none flex items-center justify-center marquee-item">
      {IconComponent ? (
        <IconComponent className="text-6xl md:text-8xl " />
      ) : (
        <img
          src={icon.imgPath}
          alt={icon.name}
          className="max-h-16 md:max-h-20 w-auto object-contain"
        />
      )}
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
