import React, { FC } from "react";
import styled from "styled-components";

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 960px;
  margin: 0 auto;
  grid-gap: 16px;

  @media (max-width: 765px) {
    margin: 0 16px;
  }

  @media (max-width: 460px) {
    margin: 0;
    overflow: hidden;
  }
`;

interface props {}

const GridCointainer: FC<props> = ({ children }) => {
  return <StyledGridContainer>{children}</StyledGridContainer>;
};

export default GridCointainer;
