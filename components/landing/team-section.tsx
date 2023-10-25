import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Card, Link, Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FunctionComponent } from "react";

interface TeamSectionProps {
  id: string;
}

const TeamSection: FunctionComponent<TeamSectionProps> = ({ id }) => {
  const { t } = useTranslation("landing");

  const team = [
    {
      image: "david.jpg",
      name: "David",
      role: "Ops lead",
      twitter: "daviddrocco",
      link: "https://twitter.com/daviddrocco",
    },
    {
      image: "milstein.png",
      name: "Milstein",
      role: "Growth lead",
      twitter: "MilsteinmAb",
      link: "https://twitter.com/milsteinmAb",
    },
    {
      image: "brian.jpg",
      name: "Brian",
      role: "Digital lead",
      twitter: "briansasbon",
      link: "https://twitter.com/briansasbon",
    },
  ];

  return (
    <Stack id={id} gap={4}>
      <Stack>
        <Typography variant="h4" fontWeight="700" mb={1}>
          {t(`team.title`)}
        </Typography>

        <Typography>{t(`team.description`)}</Typography>
      </Stack>

      <ItemsContainer>
        {team.map(({ image, name, role, twitter, link }) => (
          <Card key={name} variant="outlined" elevation={0}>
            <Stack justifyContent="center" alignItems="center" p={2}>
              <Avatar
                component={Link}
                sx={{
                  width: 100,
                  height: 100,
                }}
                src={`/assets/images/team/${image}`}
                href={link}
                target="_blank"
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
          </Card>
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

  .MuiAvatar-root {
    transition: 200ms;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;
