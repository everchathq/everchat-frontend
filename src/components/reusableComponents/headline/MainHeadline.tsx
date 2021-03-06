import React from "react";
import styled from "styled-components";

export const MainHeadline = styled.div`
  font-family: Inter-Bold;
  font-weight: 800;
  font-size: 72px;
  line-height: 80px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 56px;
    line-height: 64px;
  }

  @media (max-width: 360px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export default MainHeadline;
