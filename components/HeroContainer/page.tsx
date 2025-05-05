"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Group, Text } from "@mantine/core";

import {
  StyledHeroFlex,
  StyledHeroListText,
  StyledHeroTitle,
  StyledHeroTitle2,
} from "../styles/hero.styles";

const HeroContainer = () => {
  const [screenWidth, setScreenWidth] = useState(0);

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
    <Box
      style={{
        marginTop: screenWidth < 1080 ? "24px" : "64px",
        paddingLeft: screenWidth < 1080 ? "50px" : "210px",
        paddingRight: screenWidth < 1080 ? "50px" : "210px",
      }}
    >
      <StyledHeroFlex>
        <Box style={{ width: screenWidth < 1080 ? "100%" : "50%" }}>
          <Box style={{ textAlign: screenWidth < 1080 ? "center" : "start" }}>
            <StyledHeroTitle>
              Want to Turn Social Media Into a Profitable Career?
            </StyledHeroTitle>
            <StyledHeroTitle2>
              Discover your way to success with Fametonic:
            </StyledHeroTitle2>
          </Box>

          <Box
            style={{
              display: screenWidth < 1080 ? "flex" : "unset",
              justifyContent: "center",
            }}
          >
            <Box mt={16}>
              <Group mt={8} gap="xs" wrap="nowrap">
                <img src="https://i.ibb.co.com/v62fY0zM/image.png" alt="" />
                <StyledHeroListText>
                  Start growing your influence right away—no waiting required!
                </StyledHeroListText>
              </Group>
              <Group mt={8} gap="xs" wrap="nowrap">
                <img src="https://i.ibb.co.com/v62fY0zM/image.png" alt="" />
                <StyledHeroListText>
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </StyledHeroListText>
              </Group>
              <Group mt={8} gap="xs" wrap="nowrap">
                <img src="https://i.ibb.co.com/v62fY0zM/image.png" alt="" />
                <StyledHeroListText>
                  Use a Personal AI Worker to boost your content
                </StyledHeroListText>
              </Group>
              <Group mt={8} gap="xs" wrap="nowrap">
                <img src="https://i.ibb.co.com/v62fY0zM/image.png" alt="" />
                <StyledHeroListText>
                  Learn from expert-led courses designed for aspiring
                  influencers
                </StyledHeroListText>
              </Group>
            </Box>
          </Box>

          {screenWidth < 1080 && (
            <Box
              mt={24}
              style={{ textAlign: screenWidth < 1080 ? "center" : "start" }}
            >
              <Text
                style={{
                  fontSize: "12px",
                  color: "#ABABAB",
                  marginTop: "12px",
                }}
              >
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </Text>
              <Text
                style={{
                  fontSize: "10px",
                  color: "#ABABAB",
                  marginTop: "12px",
                }}
              >
                Fametonic 2025 ©All Rights Reserved.
              </Text>
            </Box>
          )}

          <Box mt={32}>
            <Box style={{ textAlign: screenWidth < 1080 ? "center" : "start" }}>
              <Button className="get-started-button">
                GET STARTED &nbsp;&gt;
              </Button>
              <Text
                style={{
                  width: screenWidth < 1080 ? "auto" : 313,
                  fontSize: "12px",
                  lineHeight: "16px",
                  textAlign: "center",
                  marginTop: "12px",
                }}
              >
                1-minute quiz for personalized Insights
              </Text>
            </Box>
            {screenWidth > 1080 && (
              <Box mt={36}>
                <Text
                  style={{
                    fontSize: "12px",
                    color: "#ABABAB",
                    marginTop: "12px",
                  }}
                >
                  By clicking "Get Started", you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </Text>
                <Text
                  style={{
                    fontSize: "10px",
                    color: "#ABABAB",
                    marginTop: "12px",
                  }}
                >
                  Fametonic 2025 ©All Rights Reserved.
                </Text>
              </Box>
            )}
          </Box>
        </Box>

        <Box style={{ width: screenWidth < 1080 ? "100%" : "50%" }}>
          <img
            src="https://i.ibb.co.com/B21yb0QB/Influe-mobile-mockup-3-1.png"
            alt="hero_right_img"
            className="hero-img"
          />
        </Box>
      </StyledHeroFlex>
    </Box>
  );
};

export default HeroContainer;
