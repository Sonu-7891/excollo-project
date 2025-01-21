import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Fade,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ThreeDE from "../ThreeDE";
import AIAutomation from "./AIAutomation";
import ProductDevelopment from "./ProductDevelopment";
import TechConsultancy from "./TechConsultancy";
import SalesChannelDevelopment from "./SalesChannelDevelopment";
import MLDrivenDataAnalysis from "./MLDrivenDataAnalysis";

const OurServices = () => {
  const [showButton, setShowButton] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isSpecified = useMediaQuery(
    "(min-width: 1024px) and (max-width: 1199px)"
  );
  const isLandscapeMedium = useMediaQuery(
    "(min-width: 769px) and (max-width: 900px) and (orientation: landscape)"
  );

  const aiAutomationRef = useRef(null);
  const salesChannelRef = useRef(null);
  const mlDrivenDataAnalysisRef = useRef(null);
  const productDevelopmentRef = useRef(null);
  const techConsultancyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      if (!isMobile) {
        const refs = [
          aiAutomationRef,
          salesChannelRef,
          mlDrivenDataAnalysisRef,
          productDevelopmentRef,
          techConsultancyRef,
        ];

        refs.forEach((ref) => {
          if (ref.current) {
            ref.current.collapsePanel();
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box className="services-section" sx={{ overflow: "hidden" }}>
      <Box
        sx={{
          minHeight: isLandscapeMedium ? "120vh" : "100vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "95%", sm: "90%", md: "90%" },
            margin: isLandscapeMedium
              ? "120px auto 60px"
              : { xs: "20px auto", md: "50px auto" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              minHeight: isLandscapeMedium
                ? "auto"
                : { xs: "auto", md: "50vh" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              mt: isLandscapeMedium
                ? "0"
                : { xs: "10%", md: "-15%", lg: "-20%" },
              mb: { xs: 0, md: 0 },
              position: "relative",
              zIndex: 3,
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "center", md: "flex-start" },
                  marginBottom: isLandscapeMedium ? "40px" : undefined,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    fontSize: isLandscapeMedium
                      ? "3rem"
                      : {
                          xs: "2.5rem",
                          sm: "3rem",
                          md: "3.5rem",
                          lg: "4rem",
                        },
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: "600",
                    color: "#fff",
                    whiteSpace: "nowrap",
                    ml: isLandscapeMedium
                      ? "5%"
                      : isSpecified
                      ? "13%"
                      : { xs: 0, md: "2%", lg: "11%" },
                  }}
                >
                  <span className="highlight">Our </span>
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, #2579E3 0%, #8E54F7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Services
                  </span>
                </Typography>
              </Box>

              <Typography
                sx={{
                  maxWidth: isLandscapeMedium
                    ? "90%"
                    : { xs: "100%", md: "70%" },
                  fontSize: isLandscapeMedium
                    ? "1.1rem"
                    : {
                        xs: "1.1rem",
                        sm: "1.2rem",
                        md: "1.3rem",
                        lg: "1.3rem",
                      },
                  fontWeight: 200,
                  lineHeight: 1.7,
                  textAlign: { xs: "center", md: "left" },
                  ml: isLandscapeMedium
                    ? "5%"
                    : isSpecified
                    ? "14%"
                    : { xs: 0, md: "2%", lg: "12%" },
                  px: { xs: 2, md: 0 },
                  mt: isLandscapeMedium ? 2 : { xs: 3, md: 5 },
                }}
              >
                Excollo helps enterprises transform their digital stack using
                cutting-edge AI, automation, and consultancy. We identify
                opportunities, close gaps, and implement strategies for scalable
                success.
              </Typography>
            </Box>

            {!isMobile && !isTablet && (
              <Box
                sx={{
                  width: isLandscapeMedium ? "50%" : { sm: "60%", md: "80%" },
                  mr: { md: "0%", lg: "0%" },
                  // display:isLandscapeMedium ? "none" : "block",
                  "@media (min-width: 200px) and (max-width: 900px)": {
                    display: "none",
                  },
                }}
              >
                <ThreeDE />
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          mt: isLandscapeMedium ? "0" : { xs: -40 },
          paddingTop: isLandscapeMedium ? "60px" : { xs: 0, md: 0 },
        }}
      >
        <AIAutomation ref={aiAutomationRef} />
      </Box>

      <Box>
        <SalesChannelDevelopment ref={salesChannelRef} />
      </Box>
      <Box>
        <MLDrivenDataAnalysis ref={mlDrivenDataAnalysisRef} />
      </Box>
      <Box>
        <ProductDevelopment ref={productDevelopmentRef} />
      </Box>
      <Box>
        <TechConsultancy ref={techConsultancyRef} />
      </Box>

      <Fade in={showButton}>
        <Button
          onClick={handleScrollToTop}
          variant="contained"
          color="primary"
          sx={{
            position: "fixed",
            bottom: isLandscapeMedium ? 30 : 50,
            right: isLandscapeMedium ? 30 : 50,
            height: 60,
            zIndex: 1000,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            "&:hover": {
              background: "linear-gradient(180deg, #2579e3 0%, #8e54f7 100%)",
            },
          }}
        >
          <ArrowUpwardIcon />
        </Button>
      </Fade>
    </Box>
  );
};

export default OurServices;
