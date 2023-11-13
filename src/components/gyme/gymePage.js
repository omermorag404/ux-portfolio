import styled from "styled-components";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import { H1, H3, P } from "../styles/typography";
import { Goals } from "./goals";
import gymeData from "./gymeData";
import { Persona } from "./persona";
import { Research } from "./researchResults";
import MediaQuery from "react-responsive";
import "../styles/style.css";
// images
import cover from "../img/cover.jpg";
import gym from "../img/gym.png";
import main from "../img/main.png";
import sportapp from "../img/sportapp.png";
import sticky from "../img/sticky.jpg";
import stretching from "../img/stretching.png";
import trainer from "../img/trainer.png";
import weights from "../img/weights.png";
import lowfi from "../img/lowfi.png";
export const GymeApp = () => {
  const Section = styled.div`
    display: flex;
    max-width: 1280;
    background-color: ${(props) => props.color || colors.white};
    justify-content: center;
    align-items: stretch;
    gap: ${spacing.lg};
    flex-wrap: wrap;
    padding: 40px 0;
  `;
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center; 
    align-items: ${(props) => props.alignItems || "flex-start"};
    gap: ${spacing.sm};
    width: ${(props) => props.width || "30vw"};

    @media (max-width: 767px) {
      width: 80vw;
 
  `;

  const Layout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: stretch;
  `;
  const Photo = styled.div`
    width: 100%;
    height: 500px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
  `;
  return (
    <Layout>
      <Photo photo={cover}>
        <div>
          <H1>GYMe</H1>
        </div>
      </Photo>

      <Section>
        <Content>
          <H3>{gymeData.background.title}</H3>
          <P>{gymeData.background.content}</P>
        </Content>
        <img src={gym} alt="Gym" width={"315px"} />
      </Section>
      <Section>
        <img src={stretching} alt="Gym" width={"315px"} />
        <Content>
          <H3>{gymeData.challenge.title}</H3>
          <P>{gymeData.challenge.content}</P>
        </Content>
      </Section>
      <Section>
        <Content>
          <H3>{gymeData.research.title}</H3>
          <P>{gymeData.research.content}</P>
        </Content>
        <img src={weights} alt="Gym" width={"315px"} />
      </Section>
      <Section color={colors.gray100}>
        {gymeData.data.map((number, index) => (
          <Research key={index} gymeData={number} />
        ))}
      </Section>
      <Section>
        {gymeData.persona.map((person, index) => (
          <Persona key={index} gymeData={person} />
        ))}
      </Section>

      <Section>
        <img src={sticky} alt="Gym" width={"315px"} />
        {gymeData.goals.map((goal, index) => (
          <Goals key={index} goalData={goal} />
        ))}
      </Section>
      <Section>
        <MediaQuery minWidth={"767px"}>
          <Content width="100%" alignItems="center">
            <img src={lowfi} alt="Gym" width="780px" />
          </Content>
        </MediaQuery>
        <MediaQuery maxWidth={"768px"}>
          <Content width="100%" alignItems="center">
            <img src={lowfi} alt="Gym" width="315px" />
          </Content>
        </MediaQuery>
      </Section>
      <Section>
        <Content>
          <H3>{gymeData.solution.title}</H3>
          <P>{gymeData.solution.content}</P>
        </Content>
        <img src={sportapp} alt="Gym" width={"315px"} />
      </Section>
      <Section>
        <img src={main} alt="Gym" width={"250px"} />
        <Content>
          <P>{gymeData.solution.content2}</P>
        </Content>
      </Section>
      <Section>
        <Content>
          <P>{gymeData.solution.content3}</P>
        </Content>
        <img src={trainer} alt="Gym" width={"315px"} />
      </Section>
      <Section>
        <button>Play with the prototype</button>
      </Section>
    </Layout>
  );
};
