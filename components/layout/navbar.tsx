import {
  AppBar,
  Paper,
  Stack,
  Typography,
  Toolbar,
  styled,
  IconButton,
  Button,
} from "@mui/material";
import { FunctionComponent } from "react";
import Image from "next/image";
import { BLUE, GRAY } from "../../styles/color.style";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

interface NavbarProps {}

const Socials = () => {
  return (
    <Paper square elevation={0} sx={{ py: 1, px: 3, bgcolor: GRAY[200] }}>
      <Stack direction="row" justifyContent="flex-end">
        <Typography>SOCIALS</Typography>
      </Stack>
    </Paper>
  );
};

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <AppBar
      elevation={0}
      component="nav"
      color="transparent"
      sx={{ bgcolor: BLUE[100] }}
    >
      {/* <SocialsNavbar /> */}

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

        <Stack direction="row" flex="1" justifyContent="center">
          <IconButton>
            <TwitterIcon color="primary" />
          </IconButton>
          <IconButton>
            <InstagramIcon color="primary" />
          </IconButton>
          <IconButton>
            <TwitterIcon color="primary" />
          </IconButton>
        </Stack>

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

          <Button variant="contained">Doná hoy</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
