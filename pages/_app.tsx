import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { Analytics } from '@vercel/analytics/react';
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import nextI18NextConfig from "../next-i18next.config.js";
import GlobalStyles from "../styles/globals.style";
import CUSTOM_THEME from "../styles/theme.style";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from '@solana/web3.js';
require('@solana/wallet-adapter-react-ui/styles.css');

const App = ({ Component, pageProps }: AppProps) => {


  const ENDPOINT = clusterApiUrl('devnet')
  return (
    <ConnectionProvider endpoint={ENDPOINT}>
      <WalletProvider wallets={[]} >
        <WalletModalProvider>
          <ThemeProvider theme={responsiveFontSizes(CUSTOM_THEME)}>

            {/* <Background /> */}

            <CssBaseline />

            <GlobalStyles />

            <Layout>
              <Component {...pageProps} />
              <Analytics />
            </Layout>
          </ThemeProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};


export default appWithTranslation(App, nextI18NextConfig);
