import styled from "@emotion/styled";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import useIsMobile from "../../hooks/useIsMobile";
import { BLUE } from "../../styles/color.style";
import MiniHeader from "../common/mini-header";

interface VisionSectionProps {
  id: string;
}

const VisionSection: React.FC<VisionSectionProps> = ({ id }) => {
  const isMobile = useIsMobile();
  const { t } = useTranslation("landing");

  const items = [
    {
      icon: <RocketLaunchIcon color="primary" />,
      title: t(`vision.item-1.title`),
      description: t(`vision.item-1.description`),
    },
    {
      icon: <Diversity1Icon color="primary" />,
      title: t(`vision.item-2.title`),
      description: t(`vision.item-2.description`),
    },
    {
      icon: <VerifiedUserOutlinedIcon color="primary" />,
      title: t(`vision.item-3.title`),
      description: t(`vision.item-3.description`),
    },
    {
      icon: <PublicOutlinedIcon color="primary" />,
      title: t(`vision.item-4.title`),
      description: t(`vision.item-4.description`),
    },
  ];

  return (
    <Stack id={id}>
      <Stack mb={6}>
        <MiniHeader text={t(`vision.mini-header`)} />

        <Typography variant="h4" fontWeight="700" maxWidth="40ch">
          {t(`vision.title`)}
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

export default VisionSection;

const ItemsContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
`;
