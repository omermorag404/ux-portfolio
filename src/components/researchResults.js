import styled from "styled-components";
import { H1, P } from "../styles/typography";
import spacing from "../styles/spacing";
import colors from "../styles/colors";

export const Research = ({ gymeData }) => {
  const Detail = styled.div`
    display: flex;
    flex-direction: column;
    width: 315px;
    gap: ${spacing.md};
  `;

  return (
    <Detail>
      <H1 color={colors.purple400} textAlign="center">
        {gymeData.number}
      </H1>
      <P color={colors.gray500} textAlign="center">
        {gymeData.content}
      </P>
    </Detail>
  );
};
