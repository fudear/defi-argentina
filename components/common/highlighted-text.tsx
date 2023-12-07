import { styled } from "@mui/material";
import { FunctionComponent } from "react";
import { GREEN, BLUE } from "../../styles/color.style";

interface HighlightedTextProps {
  content: string;
}

export const HighlightedText: FunctionComponent<HighlightedTextProps> = ({
  content,
}) => <Highlight>{content}</Highlight>;

export default HighlightedText;

const Highlight = styled("span")`
  background: linear-gradient(90deg, ${BLUE[400]}, ${BLUE[300]});
  background-clip: text;
  color: transparent;
`;
