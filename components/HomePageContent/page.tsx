import React from "react";

import { Navbar } from "@/shared";
import { HeroContainer } from "@/components";

const HomePageContent = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Navbar />
      <HeroContainer />
    </div>
  );
};

export default HomePageContent;
