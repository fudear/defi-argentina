import { Button, Stack, styled, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

interface PartnersSectionProps {
  id: string;
}

const PartnersSection: FunctionComponent<PartnersSectionProps> = ({ id }) => {
  const { t } = useTranslation("landing");

  const partners = [
    {
      name: "SEED Latam",
      image: "seed-latam.png",
      web: "https://twitter.com/SEEDLatam",
    },
    {
      name: "NeoPower",
      image: "neopower.png",
      web: "https://twitter.com/NeoPowerDigital",
    },
    {
      name: "Calypso",
      image: "calypso.png",
      web: "https://twitter.com/CalypsoExchange",
    },
    {
      name: "Crypto Avisos",
      image: "crypto-avisos.svg",
      web: "https://twitter.com/CryptoAvisos",
    },
    {
      name: "DeFi para principiantes",
      image: "defi-pp.png",
      web: "https://twitter.com/definovato",
    },
  ];

  return (
    <Stack id={id} gap={4}>
      <Typography variant="h4" fontWeight="700" align="center">
        {t(`partners.title`)}
      </Typography>

      <ItemsContainer>
        {partners.map(({ name, image, web }) => (
          <Stack key={name} alignItems="center" py={2}>
            <Button href={web} target="_blank">
              <Image
                src={`/assets/images/partners/${image}`}
                width={90}
                height={90}
                alt={name}
              />
            </Button>
          </Stack>
        ))}
      </ItemsContainer>
    </Stack>
  );
};

export default PartnersSection;

const ItemsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 3rem;

  img {
    filter: grayscale(100%);
    transition: 200ms;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
