import { Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FunctionComponent } from "react";
import MiniHeader from "../common/mini-header";

interface AboutSectionProps {
  id: string;
}

const AboutSection: FunctionComponent<AboutSectionProps> = ({ id }) => {
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
