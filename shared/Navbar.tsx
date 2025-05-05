"use client";
import React, { useEffect, useState } from "react";
import { Anchor, Box, Burger, Flex, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { StyledHeaderTitle } from "@/components/styles/navbar.styles";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [opened, { toggle }] = useDisclosure();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", updateScreenWidth);

      return () => {
        window.removeEventListener("resize", updateScreenWidth);
      };
    }
  }, []);

  return (
    <>
      <Box
        style={{
          backgroundImage: "linear-gradient(to right, #FC004E, #10CBE0)",
          width: "100%",
          height: screenWidth < 1080 ? 76 : 46,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 0,
        }}
      >
        <StyledHeaderTitle>
          🚀 <span style={{ color: "#00E7F9" }}>FRESH BEGINNINGS SALE:</span>{" "}
          Extra 25% OFF, Limited Spots - start your journey today!
        </StyledHeaderTitle>
      </Box>

      {screenWidth < 1080 ? (
        <Box>
          <Flex
            gap="md"
            justify="space-between"
            align="center"
            direction="row"
            wrap="nowrap"
            p={24}
          >
            <Box></Box>
            <Box style={{ width: "108px", height: "48px" }}>
              <img
                src="https://i.ibb.co.com/TQp0WTH/Group.png"
                alt="logo_header"
                style={{ width: "100%" }}
              />
            </Box>
            <Box>
              <Burger
                opened={opened}
                onClick={toggle}
                aria-label="Toggle navigation"
                color="#fff"
                size="md"
              />
            </Box>
          </Flex>
        </Box>
      ) : (
        <Box>
          <Group
            justify="space-between"
            align="flex-start"
            style={{
              marginTop: "42px",
              paddingLeft: "210px",
              paddingRight: "210px",
            }}
          >
            <Box style={{ width: "148px" }}>
              <img
                src="https://i.ibb.co.com/TQp0WTH/Group.png"
                alt="logo_header"
                style={{ width: "100%" }}
              />
            </Box>

            <Box>
              <Group gap="xl">
                <Anchor href="/" underline="never" c="#A9A9A9">
                  About us
                </Anchor>
                <Anchor href="/" underline="never" c="#A9A9A9">
                  Contact
                </Anchor>
              </Group>
            </Box>
          </Group>
        </Box>
      )}
    </>
  );
};

export default Navbar;
