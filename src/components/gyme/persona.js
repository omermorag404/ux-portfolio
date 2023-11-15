import amir from "../img/gyme/amir.jpg";
import vered from "../img/gyme/vered.jpg";
import illan from "../img/gyme/illan.jpg";
import kobi from "../img/gyme/kobi.jpg";
import styled from "styled-components";
import { H5, H4, H3, P, H6 } from "../styles/typography";
import spacing from "../styles/spacing";
import shadows from "../styles/shadows";
import colors from "../styles/colors";

export const Persona = ({ gymeData }) => {
  const photoMap = {
    vered: vered,
    amir: amir,
    illan: illan,
    kobi: kobi,
  };

  const PersonaLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: ${spacing.xl};
    box-shadow: ${shadows.medium};
    padding: ${spacing.md};
    border-radius: 8px;
    border: 1px solid ${colors.gray100};
    width: clamp(315px, 40%, 1280px);

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${spacing.xl};
      box-shadow: ${shadows.low};
      border: 1px solid ${colors.gray100};
      padding: ${spacing.lg};
      border-radius: 8px;
      width: 80vw;
    }
  `;
  const Photo = styled.div`
    width: 100px;
    height: 100px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    flex: 1 0 200;
  `;
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${spacing.sm};
    flex-wrap: wrap;
    @media (max-width: 767px) {
      align-items: center;
    }
  `;

  return (
    <PersonaLayout>
      <Content>
        <Photo photo={photoMap[gymeData.photo]}></Photo>
      </Content>
      <Content>
        <H4>{gymeData.name}</H4>

        <H6 color={colors.gray400}>
          {gymeData.age} | {gymeData.location} | {gymeData.proffesion}
        </H6>

        <P>{gymeData.bio}</P>
      </Content>
    </PersonaLayout>
  );
};
