import MediaQuery from "react-responsive";
import { Button } from "../buttons/button";
import colors from "../styles/colors";
import { Content, Layout, Photo, Section } from "../styles/layout";
import "../styles/style.css";
import { H1, H3, H5, P } from "../styles/typography";
import { Goals } from "./goals";
import gymeData from "./gymeData";
import { Persona } from "./persona";
import { Research } from "./researchResults";
// images
import cover from "../img/cover.jpg";
import gym from "../img/gym.png";
import lowfi from "../img/lowfi.png";
import main from "../img/main.png";
import sportapp from "../img/sportapp.png";
import sticky from "../img/sticky.jpg";
import stretching from "../img/stretching.png";
import weights from "../img/weights.png";
import styled from "styled-components";
export const GymeApp = () => {
  const Quate = styled.h1`
    margin: 0 -0.4em;
    font-size: 60px;
    padding: 0.1em 0.4em;
    border-radius: 0.8em 0.3em;
    background: transparent;
    background-image: linear-gradient(
      to right,
      rgba(255, 225, 0, 0.1),
      rgba(255, 225, 0, 0.7) 4%,
      rgba(255, 225, 0, 0.3)
    );
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    @media (max-width: 767px) {
      font-size: 32px;
    }
  `;

  return (
    <Layout>
      <Section>
        <Content alignItems="center">
          <H1>GYMe</H1>
          <H5>UX project | 2019</H5>
        </Content>
      </Section>
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
      <Section color={colors.blue300}>
        {gymeData.data.map((number, index) => (
          <Research key={index} gymeData={number} />
        ))}
      </Section>
      <Section>
        <Quate>"I just don't have time to workout"</Quate>
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
          <img src={lowfi} alt="Gym" width="780px" />
        </MediaQuery>
        <MediaQuery maxWidth={"768px"}>
          <img src={lowfi} alt="Gym" width="315px" />
        </MediaQuery>
      </Section>
      <Section>
        <Content>
          <H3>{gymeData.solution.title}</H3>
          <P>{gymeData.solution.content}</P>
          <P>{gymeData.solution.content2}</P>
        </Content>
        <img src={main} alt="Gym" width={"250px"} />
      </Section>
      <Section>
        <img src={sportapp} alt="Gym" width={"315px"} />
        <Content>
          <P>{gymeData.solution.content3}</P>
          <a href={gymeData.link} target="blank">
            <Button>Play with the prototype</Button>
          </a>
        </Content>
      </Section>
    </Layout>
  );
};
