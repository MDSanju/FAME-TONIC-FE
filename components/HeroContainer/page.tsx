import React from "react";
import { Box, Button, Flex, Group, Text } from "@mantine/core";

const HeroContainer = () => {
  return (
    <Box
      style={{ marginTop: "64px", paddingLeft: "210px", paddingRight: "210px" }}
    >
      <Flex
        mih={50}
        bg="rgba(0, 0, 0, .3)"
        gap={0}
        justify="space-between"
        align="flex-start"
        direction="row"
        wrap="nowrap"
      >
        <Box w="50%">
          <Text
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "35px",
              color: "#FFFFFF",
              fontWeight: 700,
            }}
          >
            Want to Turn Social Media Into a Profitable Career?
          </Text>
          <Text
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "35px",
              color: "#00E7F9",
              textShadow: "0px 4px 4px #FC004E",
              fontWeight: 700,
            }}
          >
            Discover your way to success with Fametonic:
          </Text>

          <Box mt={16}>
            <Group mt={8} gap="xs" wrap="nowrap">
              <img src="https://i.ibb.co.com/v62fY0zM/image.png" alt="" />
              <Text fw={600}>
                Start growing your influence right away—no waiting required!
              </Text>
            </Group>
            <Group mt={8} gap="xs" wrap="nowrap">
              <img src="https://i.ibb.co.com/v62fY0zM/image.png" alt="" />
              <Text fw={600}>
                Create viral TikToks and Reels step by step with easy-to-follow
                lessons
              </Text>
            </Group>
            <Group mt={8} gap="xs" wrap="nowrap">
              <img src="https://i.ibb.co.com/v62fY0zM/image.png" alt="" />
              <Text fw={600}>
                Use a Personal AI Worker to boost your content
              </Text>
            </Group>
            <Group mt={8} gap="xs" wrap="nowrap">
              <img src="https://i.ibb.co.com/v62fY0zM/image.png" alt="" />
              <Text fw={600}>
                Learn from expert-led courses designed for aspiring influencers
              </Text>
            </Group>
          </Box>

          <Box mt={32}>
            <Button className="get-started-button">
              GET STARTED &nbsp;&gt;
            </Button>
            <Text
              style={{
                width: 313,
                fontSize: "12px",
                lineHeight: "16px",
                textAlign: "center",
                marginTop: "12px",
              }}
            >
              1-minute quiz for personalized Insights
            </Text>
            <Box mt={36}>
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
          </Box>
        </Box>

        <Box w="50%">
          <img
            src="https://i.ibb.co.com/B21yb0QB/Influe-mobile-mockup-3-1.png"
            alt="hero_right_img"
            style={{ width: "100%" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroContainer;
