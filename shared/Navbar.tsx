"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
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
    <>
      <div
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
        <p className="header-title">
          🚀 <span style={{ color: "#00E7F9" }}>FRESH BEGINNINGS SALE:</span>{" "}
          Extra 25% OFF, Limited Spots - start your journey today!
        </p>
      </div>

      {screenWidth < 1080 ? (
        <div>
          <div className="nav-flex">
            <div></div>
            <div style={{ width: "108px", height: "48px" }}>
              <img
                src="https://i.ibb.co.com/TQp0WTH/Group.png"
                alt="logo_header"
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <button className="burger-button" aria-label="Toggle navigation">
                ☰
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="navbar-flex">
            <div style={{ width: "148px" }}>
              <img
                src="https://i.ibb.co.com/TQp0WTH/Group.png"
                alt="logo_header"
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <ul className="horizontal-menu">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
