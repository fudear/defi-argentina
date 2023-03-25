import { Box, Fab, Stack, styled } from "@mui/material";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutSection from "../components/landing/about-section";
import CampaignsSection from "../components/landing/campaigns-section";
import DonateSection from "../components/landing/donate-section";
import HeroSection from "../components/landing/hero-section";
import PartnersSection from "../components/landing/partners-section";
import TeamSection from "../components/landing/team-section";
import { BLUE } from "../styles/color.style";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { SOCIALS } from "../models/socials";

export default function Home() {
  return (
    <>
      <Stack gap={16}>
        <HeroSection id="hero" />
        <AboutSection id="about" />
        {/* <CampaignsSection id="campaigns" /> */}
        <BackgroundSection>
          <DonateSection id="donate" />
        </BackgroundSection>
        <TeamSection id="team" />
        <PartnersSection id="partners" />
        <Box sx={{ height: 16 }} />
      </Stack>

      <Fab
        color="secondary"
        aria-label="mail"
        sx={{ position: "fixed", bottom: "1.5rem", right: "1.5rem" }}
        href={`mailto:${SOCIALS.MAIL}`}
      >
        <AlternateEmailIcon />
      </Fab>
    </>
  );
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["landing", "common"])),
  },
});

const BackgroundSection = styled(Stack)`
  --color: ${BLUE[100]};

  background-color: var(--color);
  box-shadow: 0 0 0 100vmax var(--color);
  clip-path: inset(0 -100vmax);
  padding: 4rem;
  margin: -4rem 0;
`;
