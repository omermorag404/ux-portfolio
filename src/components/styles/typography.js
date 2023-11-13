import styled from "styled-components";
import colors from "./colors";
import textSize from "./textSize";

export const H1 = styled.h1`
  font-size: ${textSize.xxxl};
  color: ${(props) => props.color || colors.blue400};
  font-family: "Playfair Display", serif;
  font-weight: 500;
  text-align: ${(props) => props.textAlign || "left"};
  margin: 0;
`;

export const H2 = styled(H1)`
  font-size: ${textSize.xxl};
`;
export const H3 = styled(H1)`
  font-size: ${textSize.xl};
`;
export const H4 = styled(H1)`
  font-size: ${textSize.lg};
`;
export const H5 = styled(H1)`
  font-size: ${textSize.md};
  font-family: "Lato", sans-serif;
`;
export const H6 = styled(H1)`
  font-size: ${textSize.sm};
  font-family: "Lato", sans-serif;
`;

export const P = styled.p`
  font-size: ${textSize.sm};
  color: ${(props) => props.color || colors.gray500};
  font-family: "Lato", sans-serif;
  font-weight: 200;
  text-align: ${(props) => props.textAlign || "left"};
  margin: 0;
`;
