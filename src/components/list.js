import spacing from "../styles/spacing";
import { H3, P } from "../styles/typography";
import styled from "styled-components";

export const List = ({ title, goals }) => {
  const Goal = styled.div`
    display: flex;
    flex-direction: column;
    width: 315px;
    gap: ${spacing.lg};
  `;

  return (
    <Goal>
      <H3>{title}</H3>
      {goals.map((goal, index) => (
        <P key={index}>{goal.goal}</P>
      ))}
    </Goal>
  );
};
