import styled from "styled-components";

export const Display3 = styled.div`
  font-family: Inter-Bold;
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 64px;
  margin: 0;

  @media (max-width: 768px) {
    font-family: Inter-Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
  }

  @media (max-width: 360px) {
    font-family: Inter-Bold;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
  }
`;
