import { IconButton, SvgIcon } from "@mui/material";
import { FunctionComponent } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LensIcon from "../../public/assets/icons/lens.svg";
import { SOCIALS } from "../../models/socials";

interface SocialsProps {}

const Socials: FunctionComponent<SocialsProps> = () => {
  const color = "primary";

  const socials = [
    {
      name: "Twitter",
      link: SOCIALS.TWITTER,
      icon: <TwitterIcon color={color} />,
    },
    {
      name: "Lens",
      link: SOCIALS.LENS,
      icon: (
        <SvgIcon color={color}>
          <LensIcon />
        </SvgIcon>
      ),
    },
    {
      name: "Instagram",
      link: SOCIALS.INSTAGRAM,
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
