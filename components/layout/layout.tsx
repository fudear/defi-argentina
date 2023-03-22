import { Container, styled } from "@mui/material";
import Head from "next/head";
import { FunctionComponent, useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine, Container as ParticleContainer } from "tsparticles-engine";
import Footer from "./footer";
import Navbar from "./navbar";
import { loadFull } from "tsparticles";

interface LayoutProps {
  children: any;
}

const particlesOptions = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    color: {
      value: "#7aaaf6",
    },

    collisions: {
      enable: true,
    },
    move: {
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 5000,
      },
      value: 40,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 50, max: 100 },
    },
  },
  detectRetina: true,
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: ParticleContainer | undefined) => {
      await console.log(container);
    },
    []
  );

  const title = "DeFi Argentina | Donaciones";
  const description = "Doná en crypto fácil y rápido";

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
