import { Stack, Typography, Button } from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "next-i18next";
import MiniHeader from "../common/mini-header";
import HighlightedText from "../common/highlighted-text";
import useIsMobile from "../../hooks/useIsMobile";
import handCoin from "../../public/assets/animations/hand-coin.json";
import Lottie from "lottie-react";
interface HeroSectionProps {
  id: string;
}

const HeroSection: FunctionComponent<HeroSectionProps> = ({ id }) => {
  const isMobile = useIsMobile();

  const { t } = useTranslation("landing");

  return (
    <Stack
      id={id}
      direction={isMobile ? "column-reverse" : "row"}
      alignItems={isMobile ? "center" : "flex-start"}
      py={isMobile ? 10 : 20}
      gap={isMobile ? 5 : 10}
    >
      <Stack
        textAlign={isMobile ? "center" : "left"}
        maxWidth="800px"
        alignItems={isMobile ? "center" : "flex-start"}
      >
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

      <Lottie
        animationData={handCoin}
        loop
        style={{ width: isMobile ? 200 : 400 }}
      />
    </Stack>
  );
};

export default HeroSection;
