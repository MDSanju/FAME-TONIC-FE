"use client";
import React, { useEffect, useState } from "react";

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
    <div
      style={{
        marginTop: screenWidth < 1080 ? "24px" : "64px",
        paddingLeft: screenWidth < 1080 ? "50px" : "210px",
        paddingRight: screenWidth < 1080 ? "50px" : "210px",
      }}
    >
      <div className="hero-flex">
        <div style={{ width: screenWidth < 1080 ? "100%" : "50%" }}>
          <div style={{ textAlign: screenWidth < 1080 ? "center" : "start" }}>
            <h2 className="hero-title">
              Want to Turn Social Media Into a Profitable Career?
            </h2>
            <h2 className="hero-title2">
              Discover your way to success with Fametonic:
            </h2>
          </div>

          <div
            style={{
              display: screenWidth < 1080 ? "flex" : "unset",
              justifyContent: "center",
            }}
          >
            <div style={{ marginTop: "16px" }}>
              <div className="list-group">
                <img src="https://i.ibb.co.com/v62fY0zM/image.png" alt="" />
                <p className="hero-list-text">
                  Start growing your influence right away—no waiting required!
                </p>
              </div>
              <div className="list-group">
                <img src="https://i.ibb.co.com/v62fY0zM/image.png" alt="" />
                <p className="hero-list-text">
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </p>
              </div>
              <div className="list-group">
                <img src="https://i.ibb.co.com/v62fY0zM/image.png" alt="" />
                <p className="hero-list-text">
                  Use a Personal AI Worker to boost your content
                </p>
              </div>
              <div className="list-group">
                <img src="https://i.ibb.co.com/v62fY0zM/image.png" alt="" />
                <p className="hero-list-text">
                  Learn from expert-led courses designed for aspiring
                  influencers
                </p>
              </div>
            </div>
          </div>

          {screenWidth < 1080 && (
            <div
              style={{
                textAlign: screenWidth < 1080 ? "center" : "start",
                marginTop: "24px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  color: "#ABABAB",
                  marginTop: "12px",
                }}
              >
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </p>
              <p
                style={{
                  fontSize: "10px",
                  color: "#ABABAB",
                  marginTop: "16px",
                }}
              >
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          )}

          <div style={{ marginTop: "32px" }}>
            <div style={{ textAlign: screenWidth < 1080 ? "center" : "start" }}>
              <button className="get-started-button">
                GET STARTED &nbsp;&gt;
              </button>
              <p
                style={{
                  width: screenWidth < 1080 ? "auto" : 313,
                  fontSize: "12px",
                  lineHeight: "16px",
                  textAlign: "center",
                  marginTop: "12px",
                }}
              >
                1-minute quiz for personalized Insights
              </p>
            </div>
            {screenWidth > 1080 && (
              <div style={{ marginTop: "36px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#ABABAB",
                    marginTop: "12px",
                  }}
                >
                  By clicking "Get Started", you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    color: "#ABABAB",
                    marginTop: "16px",
                  }}
                >
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>
            )}
          </div>
        </div>

        <div style={{ width: screenWidth < 1080 ? "100%" : "50%" }}>
          <img
            src="https://i.ibb.co.com/B21yb0QB/Influe-mobile-mockup-3-1.png"
            alt="hero_right_img"
            className="hero-img"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
