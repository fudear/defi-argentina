import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import QRCode from "react-qr-code";
import useClipboard from "react-use-clipboard";
import useIsMobile from "../../hooks/useIsMobile";
import { WALLETS } from "../../models/wallets";
import MiniHeader from "../common/mini-header";

interface DonateSectionProps {
  id: string;
}

const WalletSelector: FunctionComponent<any> = ({
  selectedWallet,
  setSelectedWallet,
}) => {
  const isMobile = useIsMobile();

  return (
    <WalletGroup
      size={isMobile ? "small" : "large"}
      disableElevation
      orientation="vertical"
    >
      {WALLETS.map(({ icon, name, chain }, index) => (
        <Button
          key={name}
          variant={name === selectedWallet.name ? "contained" : "outlined"}
          startIcon={
            <Image
              src={`/assets/icons/${icon}`}
              alt=""
              width={20}
              height={20}
            />
          }
          sx={{ flex: 1 }}
          onClick={() => setSelectedWallet(WALLETS[index])}
        >
          {name} ({chain})
        </Button>
      ))}
    </WalletGroup>
  );
};

const DonateSection: FunctionComponent<DonateSectionProps> = ({ id }) => {
  const [selectedWallet, setSelectedWallet] = useState(WALLETS[0]);
  const { t } = useTranslation("landing");
  const isMobile = useIsMobile();

  const [isCopied, setCopied] = useClipboard(selectedWallet.address, {
    successDuration: 1000 * 2,
  });

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

      <Card variant="outlined" elevation={0}>
        <Stack direction={isMobile ? "column" : "row"}>
          <WalletSelector
            selectedWallet={selectedWallet}
            setSelectedWallet={setSelectedWallet}
          />

          <Widget p={3} alignItems="center" justifyContent="center">
            <Typography>{t("donate.instruction")}</Typography>

            <Box my={5}>
              <QRCode size={128} value={selectedWallet.address} />
            </Box>

            <Chip
              color={selectedWallet.domain ? "primary" : "default"}
              label={selectedWallet.domain || selectedWallet.chain}
            />

            <Typography variant="body2" mt={1}>
              {selectedWallet.address}
            </Typography>

            <Button
              startIcon={isCopied ? <CheckIcon /> : <ContentCopyIcon />}
              size="small"
              onClick={setCopied}
            >
              {t("donate.copy")}
            </Button>
          </Widget>
        </Stack>
      </Card>
    </Stack>
  );
};

export default DonateSection;

const Widget = styled(Stack)`
  min-width: min(30rem, 78vw);
`;

const WalletGroup = styled(ButtonGroup)`
  .MuiButtonGroup-grouped:first-of-type {
    border-top-right-radius: 0;
  }

  .MuiButtonGroup-grouped:last-of-type {
    border-bottom-right-radius: 0;
  }
`;
