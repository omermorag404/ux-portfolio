import MediaQuery from "react-responsive";
import { Button } from "../components/button";
import colors from "../styles/colors";
import { Content, Layout, ProjectCover, Section } from "../styles/layout";
import "../styles/style.css";
import { H3, P } from "../styles/typography";
import { List } from "../components/list";
import gymeData from "../data/gymeData";
import { Persona } from "../components/persona";
import { Research } from "../components/researchResults";
// images
import gym from "../assets/img/gyme/gym.png";
import lowfi from "../assets/img/gyme/lowfi.png";
import main from "../assets/img/gyme/main.png";
import sticky from "../assets/img/gyme/sticky.jpg";
import stretching from "../assets/img/gyme/stretching.png";
import weights from "../assets/img/gyme/weights.png";
export const GymeApp = () => {
  return (
    <Layout>
      <ProjectCover />
      <Section>
        <Content>
          <H3>{gymeData.background.title}</H3>
          <P>{gymeData.background.content}</P>
        </Content>
        <img src={gym} alt="Gym" width={"315px"} />
      </Section>
      <Section>
        <Content alignItems="center">
          <img src={stretching} alt="Gym" width={"315px"} />
        </Content>
        <Content>
          <H3>{gymeData.challenge.title}</H3>
          <P>{gymeData.challenge.content}</P>
        </Content>
      </Section>
      <Section color={colors.gray100}>
        <Content>
          <H3>{gymeData.research.title}</H3>
          <P>{gymeData.research.content}</P>
        </Content>
        <Content alignItems="center">
          <img src={weights} alt="Gym" width={"315px"} />
        </Content>
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

      <Section color={colors.gray100}>
        {gymeData.businessGoals && (
          <List
            title={gymeData.businessGoals.title}
            goals={gymeData.businessGoals.goals}
          />
        )}
        <Content alignItems="center">
          <img src={sticky} alt="Gym" width={"315px"} />
        </Content>
        {gymeData.userGoals && (
          <List
            title={gymeData.userGoals.title}
            goals={gymeData.userGoals.goals}
          />
        )}
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
          <P>{gymeData.solution.content3}</P>
          <a href={gymeData.link} target="blank">
            <Button>Play with the prototype</Button>
          </a>
        </Content>
        <img src={main} alt="Gym" width={"250px"} />
      </Section>
    </Layout>
  );
};
