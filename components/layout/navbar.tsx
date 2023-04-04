import {
  AppBar,
  Button,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
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
      variant="outlined"
      elevation={0}
      component="nav"
      color="transparent"
      sx={{ bgcolor: "white" }}
    >
      <Toolbar>
        <Stack flex="1" justifyContent="flex-start">
          <Image
            src="/assets/images/logo/logo.png"
            alt="logo defi argentina"
            width={235}
            height={40}
            style={{ cursor: "pointer" }}
          />
        </Stack>

        {!isMobile && (
          <Stack
            direction="row"
            flex="1"
            justifyContent={isMobile ? "flex-end" : "center"}
          >
            <Socials />
          </Stack>
        )}

        {!isMobile && (
          <Stack
            direction="row"
            gap={1}
            flex="1"
            justifyContent="flex-end"
            alignItems="center"
          >
            <MenuItem component="a" href="#about">
              Que hacemos
            </MenuItem>
            <MenuItem component="a" href="#donate">
              Donar
            </MenuItem>
            <MenuItem component="a" href="#contact">
              Contacto
            </MenuItem>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
