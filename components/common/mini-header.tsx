import { Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface MiniHeaderProps {
  text: string;
}

const MiniHeader: FunctionComponent<MiniHeaderProps> = ({ text }) => {
  return (
    <Typography
      fontWeight="500"
      color="primary"
      mb={1.5}
      textTransform="uppercase"
    >
      {text}
    </Typography>
  );
};

export default MiniHeader;
