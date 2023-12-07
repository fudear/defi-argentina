import { Container, styled } from "@mui/material";
import Head from "next/head";
import { FunctionComponent } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutProps {
  children: any;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const title = "DeFi Argentina | Donaciones";
  const description = "Doná en crypto fácil y transparente";

  const metas = [
    { name: "description", content: description },
    { name: "viewport", content: "initial-scale=1, width=device-width" },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>

        {metas.map(({ name, content }) => (
          <meta key={name} name={name} content={content} />
        ))}
      </Head>

      <Navbar />

      <Main>
        <Container>{children}</Container>
      </Main>

      <Footer />
    </>
  );
};

export default Layout;

const Main = styled("main")`
  margin-top: 5rem;
`;
