import styled from "styled-components";
import colors from "./colors";
import spacing from "./spacing";
import sportapp from "../assets/img/gyme/sportapp.png";

export const Section = styled.div`
  display: flex;
  max-width: 1280;
  background-color: ${(props) => props.color || colors.white};
  justify-content: center;
  align-items: stretch;
  gap: ${spacing.xxl};
  flex-wrap: wrap;
  padding: 40px 0;
  height: ${(props) => props.height || "auto"};
`;
export const Content = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center; 
align-items: ${(props) => props.alignItems || "flex-start"};
gap: ${spacing.md};
width: clamp(315px, 40%, 490px);

@media (max-width: 767px) {
  width: 75vw;

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

export const CoverPhoto = styled.div`
  display: flex;
  flex-wrap: nowrap;

  height: 40vh;
  flex-direction: column;
  align-items: center;
  background: rgb(133, 168, 255);
  background: radial-gradient(
    circle,
    rgba(133, 168, 255, 1) 0%,
    rgba(104, 83, 255, 1) 100%
  );
  padding: 24px;
  h1 {
    font-size: 80px;
    color: white;
    margin: 0;
    text-align: center;
  }
  h5 {
    font-size: 32px;
    color: white;
    margin: 0;
    text-align: center;
  }
`;
export const ProjectCover = () => {
  return (
    <CoverPhoto>
      <Content alignItems="center">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h1 color="white">GYMe</h1>
          <h5 color="white">UX project | 2019</h5>
        </div>
        <img src={sportapp} alt="Gym" width={"200vw"} />
      </Content>
    </CoverPhoto>
  );
};
