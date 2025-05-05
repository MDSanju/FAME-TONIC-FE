import React from "react";
import styled from "styled-components";
import { Text } from "@mantine/core";

export const StyledHeaderTitle = styled(Text)`
  font-family: Figtree, sans-serif;
  font-weight: 800;
  font-size: 22px;
  text-align: center;
  padding: 0 10px;

  @media (max-width: 1080px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 13px;
    padding: 0 24px;
  }

  @media (max-width: 420px) {
    font-size: 12px;
    padding: 0 16px;
  }
`;
