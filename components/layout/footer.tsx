import { Stack, styled, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { GRAY } from "../../styles/color.style";
import Socials from "../common/socials";
import Image from "next/image";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <StyledFooter>
      <Stack textAlign="center" gap={1}>
        <Image
          src="/assets/images/logo/logo.svg"
          alt="logo defi argentina"
          width={235}
          height={40}
          style={{ cursor: "pointer" }}
        />

        <Stack direction="row" justifyContent="center">
          <Socials />
        </Stack>
      </Stack>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled("footer")`
  background-color: ${GRAY[200]};
  padding: 2rem;
  display: flex;
  justify-content: center;
`;
