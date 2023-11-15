import MediaQuery from "react-responsive";
import { Button } from "../components/buttons/button";
import colors from "../components/styles/colors";
import {
  Content,
  Layout,
  ProjectCover,
  Section,
} from "../components/styles/layout";
import "../components/styles/style.css";
import { H3, P } from "../components/styles/typography";
import { Goals } from "../components/gyme/goals";
import gymeData from "../components/gyme/gymeData";
import { Persona } from "../components/gyme/persona";
import { Research } from "../components/gyme/researchResults";
// images
import gym from "../components/img/gyme/gym.png";
import lowfi from "../components/img/gyme/lowfi.png";
import main from "../components/img/gyme/main.png";
import sticky from "../components/img/gyme/sticky.jpg";
import stretching from "../components/img/gyme/stretching.png";
import weights from "../components/img/gyme/weights.png";
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
        <img src={stretching} alt="Gym" width={"315px"} />
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

      <Section color={colors.gray100}>
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
