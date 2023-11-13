import styled from "styled-components";
import { H1, P } from "../styles/typography";
import spacing from "../styles/spacing";

export const Research = ({ gymeData }) => {
  const Detail = styled.div`
    display: flex;
    flex-direction: column;
    width: 315px;
    gap: ${spacing.md};
  `;

  return (
    <Detail>
      <H1 textAlign="center">{gymeData.number}</H1>
      <P textAlign="center">{gymeData.content}</P>
    </Detail>
  );
};
