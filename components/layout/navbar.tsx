import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { FunctionComponent } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import { BLUE } from "../../styles/color.style";
import Socials from "../common/socials";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const isMobile = useIsMobile();

  return (
    <AppBar
      elevation={1}
      component="nav"
      color="transparent"
      sx={{ bgcolor: "white" }}
    >
      <Toolbar>
        <Stack flex="1" justifyContent="flex-start">
          <Image
            src="/assets/images/logo/logo.svg"
            alt="logo defi argentina"
            width={235}
            height={40}
            style={{ cursor: "pointer" }}
          />
        </Stack>

        <Stack
          direction="row"
          flex="1"
          justifyContent={isMobile ? "flex-end" : "center"}
        >
          <Socials />
        </Stack>

        {!isMobile && (
          <Stack
            direction="row"
            gap={3}
            flex="1"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Typography>Campañas</Typography>
            <Typography>Equipo</Typography>
            <Typography>Contactar</Typography>

            <Button variant="contained" href="#donate">
              Doná hoy
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
