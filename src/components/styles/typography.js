import styled from "styled-components";
import colors from "./colors";
import textSize from "./textSize";

export const H1 = styled.h1`
  font-size: ${textSize.xxl};
  color: ${(props) => props.color || colors.gray500};
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  text-align: ${(props) => props.textAlign || "left"};
  margin: 0;
`;

export const H2 = styled(H1)`
  font-size: ${textSize.xl};
`;
export const H3 = styled(H1)`
  font-size: ${textSize.lg};
`;
export const H4 = styled(H1)`
  font-size: ${textSize.md};
`;
export const H5 = styled(H1)`
  font-size: ${textSize.sm};
`;
export const H6 = styled(H1)`
  font-size: ${textSize.xs};
`;

export const P = styled.p`
  font-size: ${textSize.sm};
  color: ${(props) => props.color || colors.gray500};
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  text-align: ${(props) => props.textAlign || "left"};
  margin: 0;
`;
