import { IconButton, SvgIcon } from "@mui/material";
import { FunctionComponent } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LensIcon from "../../public/assets/icons/lens.svg";

interface SocialsProps {}

const Socials: FunctionComponent<SocialsProps> = () => {
  const color = "primary";

  const socials = [
    {
      name: "Twitter",
      link: "https://twitter.com/DefiArgentina",
      icon: <TwitterIcon color={color} />,
    },
    {
      name: "Lens",
      link: "https://www.lensfrens.xyz/defiargentina.lens",
      icon: (
        <SvgIcon color={color}>
          <LensIcon />
        </SvgIcon>
      ),
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/DefiArgentina/",
      icon: <InstagramIcon color={color} />,
    },
  ];

  return (
    <>
      {socials.map(({ name, link, icon }) => (
        <IconButton key={name} href={link} target="_blank">
          {icon}
        </IconButton>
      ))}
    </>
  );
};

export default Socials;
