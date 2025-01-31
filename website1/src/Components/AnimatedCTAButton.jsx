import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

gsap.registerPlugin(ScrollTrigger);

// Define keyframes for animations
const bounceUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  60% {
    transform: translateY(-10%);
  }
  80% {
    transform: translateY(5%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const morphButton = keyframes`
  0% {
    width: 40%;
    height: 100%;
    border-radius: 50%;
    opacity: 0;
  }
  50% {
    width: 40%;
    height: 100%;
    border-radius: 50%;
    opacity: 1;
  }
  80% {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    opacity: 1;
  }
  100% {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    opacity: 1;
  }
`;

// Styled components
const AnimatedContainer = styled(Box)`
  animation: ${({ isVisible }) => (isVisible ? bounceUp : "none")} 1.2s
    cubic-bezier(0.25, 0.1, 0.25, 1.4) forwards;
`;

const AnimatedButton = styled(Box)`
  animation: ${({ isVisible }) => (isVisible ? morphButton : "none")} 1.2s
    cubic-bezier(0.25, 0.1, 0.25, 1.4) forwards;
`;

const AnimatedCTAButton = ({ onClick }) => {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const circle = circleRef.current;
    const text = textRef.current;
    const container = containerRef.current;

    // Initial states
    gsap.set(text, {
      opacity: 0,
      scale: 0,
    });

    // Text animation timeline
    const textTl = gsap.timeline({ paused: true });
    textTl.to(text, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      delay: 1.5,
      ease: "power2.out",
    });

    // ScrollTrigger setup
    ScrollTrigger.create({
      trigger: container,
      start: "top 90%",
      end: "bottom 15%",
      onEnter: () => {
        setIsVisible(true);
        textTl.play();
      },
      onLeave: () => {
        setIsVisible(false);
        textTl.reverse();
      },
      onEnterBack: () => {
        setIsVisible(true);
        textTl.play();
      },
      onLeaveBack: () => {
        setIsVisible(false);
        textTl.reverse();
      },
    });

    // Hover animation
    const hoverTl = gsap.timeline({ paused: true });
    hoverTl
      .to(circle, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(
        text,
        {
          scale: 1.02,
          duration: 1.5,
          ease: "power2.out",
        },
        0
      );

    const button = buttonRef.current;
    button.addEventListener("mouseenter", () => hoverTl.play());
    button.addEventListener("mouseleave", () => hoverTl.reverse());

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      textTl.kill();
      hoverTl.kill();
    };
  }, [isMobile]);

  return (
    <AnimatedContainer
      ref={containerRef}
      isVisible={isVisible}
      sx={{
        ml: {
          xs: "2%",
          sm: "2%",
          md: "8%",
          lg: "5%",
          xl: "2%",
        },
        padding: {
          xs: "20px 10px",
          sm: "20px 30px",
          md: "20px 50px",
          lg: "25px 50px",
          xl: "5px 85px",
        },
        width:"200px",
        height:"200px",
        opacity: 0,
        transform: "translateY(100%)",
      }}
    >
      <Box
        ref={buttonRef}
        component={Link}
        to="/contact"
        onClick={onClick}
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        <AnimatedButton
          ref={circleRef}
          isVisible={isVisible}
          sx={{
            position: "absolute",
            background:
              "linear-gradient(180deg, rgba(170, 63, 255, 0.9) 0%, rgba(94, 129, 235, 0.9) 100%)",
            width: isMobile ? "200px" : "100%",
            height: isMobile ? "100px" : "100%",
            opacity: 0,
          }}
        />
        <Typography
          ref={textRef}
          sx={{
            color: "#FFFFFF",
            fontWeight: 300,
            fontSize: {
              xs: "16px",
              sm: "17px",
              md: "18px",
              lg: "18px",
              xl: "20px",
            },
            zIndex: 2,
            whiteSpace: "nowrap",
            opacity: 0,
          }}
        >
          Talk to Us
        </Typography>
      </Box>
    </AnimatedContainer>
  );
};

export default AnimatedCTAButton;
