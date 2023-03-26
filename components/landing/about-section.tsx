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
import Image from "next/image";

interface AboutSectionProps {
  id: string;
}

const AboutSection: FunctionComponent<AboutSectionProps> = ({ id }) => {
  const isMobile = useIsMobile();
  const { t } = useTranslation("landing");

  return (
    <Stack id={id}>
      <Stack mb={6}>
        <MiniHeader text={t(`about.mini-header`)} />

        <Typography variant="h4" fontWeight="700" maxWidth="40ch">
          {t(`about.title`)}
        </Typography>
      </Stack>

      <Stack direction="row" gap={4} overflow="auto">
        <Image
          src="/assets/images/campaigns/campaign_1.png"
          alt="campaign"
          width={300}
          height={300}
        />
        <Image
          src="/assets/images/campaigns/campaign_2.png"
          alt="campaign"
          width={300}
          height={300}
        />
        <Image
          src="/assets/images/campaigns/campaign_3.png"
          alt="campaign"
          width={300}
          height={300}
        />
      </Stack>
    </Stack>
  );
};

export default AboutSection;

const ItemsContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
`;
