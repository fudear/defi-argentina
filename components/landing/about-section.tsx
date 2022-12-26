import { Avatar, Box, Stack, styled, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "next-i18next";
import MiniHeader from "../common/mini-header";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { BLUE } from "../../styles/color.style";
import useIsMobile from "../../hooks/useIsMobile";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

interface AboutSectionProps {
  id: string;
}

const AboutSection: FunctionComponent<AboutSectionProps> = ({ id }) => {
  const isMobile = useIsMobile();
  const { t } = useTranslation("landing");

  const items = [
    {
      icon: <FavoriteBorderOutlinedIcon color="primary" />,
      title: t(`about.item-1.title`),
      description: t(`about.item-1.description`),
    },
    {
      icon: <FlagOutlinedIcon color="primary" />,
      title: t(`about.item-2.title`),
      description: t(`about.item-2.description`),
    },
    {
      icon: <VerifiedUserOutlinedIcon color="primary" />,
      title: t(`about.item-3.title`),
      description: t(`about.item-3.description`),
    },
    {
      icon: <PublicOutlinedIcon color="primary" />,
      title: t(`about.item-4.title`),
      description: t(`about.item-4.description`),
    },
  ];

  return (
    <Stack id={id}>
      <Stack mb={6}>
        <MiniHeader text={t(`about.mini-header`)} />

        <Typography variant="h4" fontWeight="700" maxWidth="40ch">
          {t(`about.title`)}
        </Typography>
      </Stack>

      <ItemsContainer sx={{ gap: isMobile ? "4rem" : "6rem" }}>
        {items.map(({ icon, title, description }) => (
          <Stack key={title} gap={2}>
            <Avatar sx={{ width: "48px", height: "48px", bgcolor: BLUE[100] }}>
              {icon}
            </Avatar>

            <Typography variant="h5" fontWeight="600">
              {title}
            </Typography>

            <Typography color="text.secondary">{description}</Typography>
          </Stack>
        ))}
      </ItemsContainer>
    </Stack>
  );
};

export default AboutSection;

const ItemsContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
`;
