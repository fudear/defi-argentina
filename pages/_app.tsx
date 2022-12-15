import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import GlobalStyles from "../styles/globals.style";
import CUSTOM_THEME from "../styles/theme.style";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={responsiveFontSizes(CUSTOM_THEME)}>
      <CssBaseline />

      <GlobalStyles />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
