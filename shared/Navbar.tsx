import React from "react";
import { Anchor, Box, Group, Text } from "@mantine/core";

const Navbar = () => {
  return (
    <>
      <Box
        style={{
          backgroundImage: "linear-gradient(to right, #FC004E, #10CBE0)",
          width: "100%",
          height: 46,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 0,
        }}
      >
        <Text fw={800} style={{ fontFamily: 'Figtree, sans-serif' }}>
          🚀 <span style={{ color: "#00E7F9" }}>FRESH BEGINNINGS SALE:</span>{" "}
          Extra 25% OFF, Limited Spots - start your journey today!
        </Text>
      </Box>

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
    </>
  );
};

export default Navbar;
