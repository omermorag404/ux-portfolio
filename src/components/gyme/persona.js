import amir from "../img/amir.jpg";
import vered from "../img/vered.jpg";
import illan from "../img/illan.jpg";
import kobi from "../img/kobi.jpg";
import styled from "styled-components";
import { H5, H4, H3, P } from "../styles/typography";
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
    box-shadow: ${shadows.low};
    padding: ${spacing.md};
    border-radius: 8px;
    border: 1px solid ${colors.blue300};
    width: 50vw;

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${spacing.xl};
      box-shadow: ${shadows.low};
      border: 1px solid ${colors.blue300};
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
    border-radius: 50%;
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
        <H3>{gymeData.name}</H3>

        <H4>
          {gymeData.age} | {gymeData.location}
        </H4>

        <H4>{gymeData.H4roffesion}</H4>
        <P>{gymeData.bio}</P>
      </Content>
    </PersonaLayout>
  );
};
