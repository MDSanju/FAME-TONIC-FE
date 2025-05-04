import React from "react";
import { Box } from "@mantine/core";

import { Navbar } from "@/shared";
import { HeroContainer } from "@/components";

const HomePageContent = () => {
  return (
    <Box mb={50}>
      <Navbar />
      <HeroContainer />
    </Box>
  );
};

export default HomePageContent;
