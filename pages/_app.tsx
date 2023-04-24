import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { Analytics } from '@vercel/analytics/react';
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import nextI18NextConfig from "../next-i18next.config.js";
import GlobalStyles from "../styles/globals.style";
import CUSTOM_THEME from "../styles/theme.style";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={responsiveFontSizes(CUSTOM_THEME)}>
      {/* <Background /> */}

      <CssBaseline />

      <GlobalStyles />

      <Layout>
        <Component {...pageProps} />
        <Analytics  />
      </Layout>
    </ThemeProvider>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
