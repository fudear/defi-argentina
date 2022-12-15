import { Button, ButtonGroup, Stack, SvgIcon, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import MiniHeader from "../common/mini-header";
import { useTranslation } from "next-i18next";

interface DonateSectionProps {
  id: string;
}

const DonateSection: FunctionComponent<DonateSectionProps> = ({ id }) => {
  const { t } = useTranslation("landing");

  return (
    <Stack id={id} alignItems="center">
      <Stack alignItems="center" mb={4}>
        <MiniHeader text={t(`donate.mini-header`)} />
        <Typography
          variant="h4"
          fontWeight="700"
          align="center"
          maxWidth="25ch"
        >
          {t(`donate.title`)}
        </Typography>
      </Stack>

      <ButtonGroup disableElevation variant="contained">
        <Button>Ethereum (ERC20)</Button>
        <Button>BNB Chain (BEP20)</Button>
        <Button>Tron (TRC20)</Button>
        <Button>Polygon (MATIC)</Button>
      </ButtonGroup>
    </Stack>
  );
};

export default DonateSection;
