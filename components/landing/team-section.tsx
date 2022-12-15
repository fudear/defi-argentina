import { Avatar, Button, Link, Stack, styled, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "next-i18next";
import TwitterIcon from "@mui/icons-material/Twitter";

interface TeamSectionProps {
  id: string;
}

const TeamSection: FunctionComponent<TeamSectionProps> = ({ id }) => {
  const { t } = useTranslation("landing");

  const team = [
    {
      image: "noa.jpg",
      name: "Noa",
      role: "Co-Founder",
      twitter: "Noalatam",
      link: "https://twitter.com/noalatam",
    },
    {
      image: "anita.jpg",
      name: "Anita",
      role: "Co-Founder",
      twitter: "Kitanita",
      link: "https://twitter.com/kitanita",
    },
    {
      image: "milstein.png",
      name: "Milstein",
      role: "Growth",
      twitter: "MilsteinmAb",
      link: "https://twitter.com/milsteinmAb",
    },
    {
      image: "pats.jpg",
      name: "Pato",
      role: "Voluntaria",
      twitter: "ValkPats",
      link: "https://twitter.com/ValkPats",
    },
    {
      image: "cintia.png",
      name: "Cintia",
      role: "Voluntaria",
      twitter: "AiryAngle",
      link: "https://twitter.com/airyAngle",
    },
  ];

  return (
    <Stack id={id} gap={4}>
      <Stack>
        <Typography variant="h4" fontWeight="700" mb={2}>
          {t(`team.title`)}
        </Typography>

        <Typography>{t(`team.description`)}</Typography>
      </Stack>

      <ItemsContainer>
        {team.map(({ image, name, role, twitter, link }) => (
          <Stack key={name}>
            <Avatar
              variant="rounded"
              sx={{ width: 100, height: 100 }}
              src={`/assets/images/team/${image}`}
            />

            <Typography variant="h5" mt={4} fontWeight="600">
              {name}
            </Typography>
            <Typography color="text.secondary">{role}</Typography>

            <Link
              underline="hover"
              href={link}
              target="_blank"
              color="text.secondary"
              sx={{ display: "flex", gap: 0.5 }}
            >
              <TwitterIcon />@{twitter}
            </Link>
          </Stack>
        ))}
      </ItemsContainer>
    </Stack>
  );
};

export default TeamSection;

const ItemsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 3rem;
`;
