import React, { useState, useEffect } from "react";
import { Box, keyframes } from "@mui/material";

const moveUpDown = keyframes`
  0%  {
    transform: translateY(-8px) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(-42px) scale(1.1);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-42px) scale(0);
    opacity: 0;
  }
`;

const GradientBallNotification = ({ timeout = 2000 }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setLastActivity(Date.now());
      setShowNotification(false);
    };

    const handleActivity = () => {
      setLastActivity(Date.now());
      setShowNotification(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleActivity);
    window.addEventListener("keypress", handleActivity);
    window.addEventListener("scroll", handleActivity);

    const inactivityTimer = setInterval(() => {
      const timeSinceLastActivity = Date.now() - lastActivity;
      if (timeSinceLastActivity >= timeout && !isHovered) {
        setShowNotification(true);
      }
    }, 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("keypress", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      clearInterval(inactivityTimer);
    };
  }, [timeout, lastActivity, isHovered]);

  return (
    showNotification && (
      <Box
        sx={{
          position: "fixed",
          left: cursorPosition.x - -20,
          top: cursorPosition.y - 30,
          zIndex: 9999,
          transition: "all 0.7s ease-in-out",
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 60,
            borderRadius: "50px",
            background:
              "linear-gradient(135deg, rgba(128,128,128,0.3), rgba(255,255,255,0.1))",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setLastActivity(Date.now());
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setShowNotification(false);
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "20px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "white",
                animation: `${moveUpDown} 1.7s ease-in-out infinite`,
                position: "absolute",
                bottom: 0,
              }}
            />
          </Box>
        </Box>
      </Box>
    )
  );
};

export default GradientBallNotification;
