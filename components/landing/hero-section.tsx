import { Stack, Typography, Button } from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "next-i18next";
import MiniHeader from "../common/mini-header";
import HighlightedText from "../common/highlighted-text";

interface HeroSectionProps {
  id: string;
}

const HeroSection: FunctionComponent<HeroSectionProps> = ({ id }) => {
  const { t } = useTranslation("landing");

  return (
    <Stack id={id} alignItems="center" py={20}>
      <Stack textAlign="center" maxWidth="800px" alignItems="center">
        <MiniHeader text={t(`hero.mini-header`)} />

        <Typography variant="h2" fontWeight="700" mb={3}>
          <HighlightedText content={t(`hero.title-1`)} />
          <br />
          {t(`hero.title-2`)}
        </Typography>

        <Typography maxWidth="50ch">{t(`hero.description`)}</Typography>

        <Stack direction="row" gap={2} mt={4}>
          <Button variant="outlined" href="#about" sx={{ py: 1 }}>
            {t(`hero.secondary`)}
          </Button>

          <Button variant="contained" href="#donate" sx={{ py: 1 }}>
            {t(`hero.primary`)}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
