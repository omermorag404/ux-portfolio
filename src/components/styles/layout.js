import styled from "styled-components";
import colors from "./colors";
import spacing from "./spacing";

export const Section = styled.div`
  display: flex;
  max-width: 1280;
  background-color: ${(props) => props.color || colors.white};
  justify-content: center;
  align-items: stretch;
  gap: ${spacing.xxl};
  flex-wrap: wrap;
  padding: 40px 0;
`;
export const Content = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center; 
align-items: ${(props) => props.alignItems || "flex-start"};
gap: ${spacing.md};
width: clamp(200px, 40%, 400px);

@media (max-width: 767px) {
  width: 80vw;

`;

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
`;
export const Photo = styled.div`
  width: 100%;
  height: 30vh;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`;
