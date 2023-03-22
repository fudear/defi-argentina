import { Box, Stack } from "@mui/material";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutSection from "../components/landing/about-section";
import CampaignsSection from "../components/landing/campaigns-section";
import DonateSection from "../components/landing/donate-section";
import HeroSection from "../components/landing/hero-section";
import PartnersSection from "../components/landing/partners-section";
import TeamSection from "../components/landing/team-section";

export default function Home() {
  return (
    <Stack gap={16}>
      <HeroSection id="hero" />
      <AboutSection id="about" />
      {/* <CampaignsSection id="campaigns" /> */}
      <DonateSection id="donate" />
      <TeamSection id="team" />
      <PartnersSection id="partners" />
      <Box sx={{ height: 16 }} />
    </Stack>
  );
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["landing", "common"])),
  },
});
