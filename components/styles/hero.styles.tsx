import React from "react";
import styled from "styled-components";
import { Box, Text } from "@mantine/core";

export const StyledHeroFlex = styled(Box)`
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const StyledHeroTitle = styled(Text)`
  font-family: Urbanist, sans-serif;
  font-size: 35px;
  color: #ffffff;
  font-weight: 700;

  @media (max-width: 1300px), (max-width: 1080px) {
    font-size: 25px;
  }
`;

export const StyledHeroTitle2 = styled(Text)`
  font-family: Urbanist, sans-serif;
  font-size: 35px;
  color: #00e7f9;
  text-shadow: 0px 4px 4px #fc004e;
  font-weight: 700;

  @media (max-width: 1300px), (max-width: 1080px) {
    font-size: 25px;
  }
`;

export const StyledHeroListText = styled(Text)`
  font-weight: 600;

  @media (max-width: 1080px) {
    font-weight: 500;
  }
`;
