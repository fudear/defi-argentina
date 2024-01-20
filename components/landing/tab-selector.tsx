import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import QRCode from 'react-qr-code';
import { Button, Chip } from '@mui/material';
import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { t } from 'i18next';
import SolanaWalletConnect from './solana-wallet-connect';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{
          display: 'flex', paddingTop: '64px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }}>
          {children}
        </Box >
      )
      }
    </div >
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


//@ts-ignore
export default function BasicTabs({ selectedWallet, isCopied, setCopied }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      height: '100%',
    }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Donación instantanea" {...a11yProps(0)} />
          <Tab label="Donación recurrente" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography>{t("donate.instruction")}</Typography>
        <Box my={5}>
          <QRCode size={128} value={selectedWallet.address} />
        </Box>

        <Chip
          color={selectedWallet.domain ? "primary" : "default"}
          label={selectedWallet.domain || selectedWallet.chain}
        />
        <Typography variant="body2" mt={1} maxWidth="40ch" noWrap>
          {selectedWallet.isLink ? (
            <a
              href={selectedWallet.address}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectedWallet.address}
            </a>
          ) : (
            selectedWallet.address
          )}
        </Typography>

        <Button
          startIcon={isCopied ? <CheckIcon /> : <ContentCopyIcon />}
          size="small"
          onClick={setCopied}
        >
          {t("donate.copy")}
        </Button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} >
        <SolanaWalletConnect />
      </CustomTabPanel>
    </Box >
  );
}