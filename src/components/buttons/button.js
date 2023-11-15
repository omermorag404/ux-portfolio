import styled from "styled-components";
import colors from "../styles/colors";

export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor || colors.purple400};
  color: ${(props) => props.color || colors.white};
  padding: 12px 18px;
  border-radius: 4px;
  border: 0px;
  &&:hover {
    background-color: ${(props) => props.backgroundColor || colors.blue400};
  }
  &&:active {
    background-color: ${(props) => props.backgroundColor || colors.blue500};
  }
`;
