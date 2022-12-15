import { Stack, Typography, Button } from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "next-i18next";
import MiniHeader from "../common/mini-header";

interface HeroSectionProps {
  id: string;
}

const HeroSection: FunctionComponent<HeroSectionProps> = ({ id }) => {
  const { t } = useTranslation("landing");

  return (
    <Stack
      id={id}
      alignItems="center"
      py={10}
      sx={{
        backdropFilter: "blur(5px)",
      }}
    >
      <Stack textAlign="center" maxWidth="800px" alignItems="center">
        <MiniHeader text={t(`hero.mini-header`)} />

        <Typography variant="h2" fontWeight="700" mb={3}>
          {t(`hero.title`)}
        </Typography>

        <Typography maxWidth="50ch">{t(`hero.description`)}</Typography>

        <Stack direction="row" gap={2} mt={4}>
          <Button variant="outlined" href="#about">
            {t(`hero.secondary`)}
          </Button>

          <Button variant="contained" href="#donate">
            {t(`hero.primary`)}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
