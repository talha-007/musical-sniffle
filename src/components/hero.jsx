import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "730px",
        height: "731px",
        background: `linear-gradient(76.6deg, #000000dc 45.03%, rgba(0, 0, 0, 0.508) 63.41%, rgba(0, 0, 0, 0) 90.3%), url('/heroimg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.85,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            height: "100%",
            gap: "24px",
            maxWidth: "750px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "40px", md: "56px" },
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#fff",
            }}
          >
            Say Goodbye to Junk and Hello to Reliable Waste Solutions!{" "}
            <span
              style={{
                background:
                  "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              {" "}
              Junk-Removal!
            </span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "16px", md: "16px" },
              lineHeight: 1.6,
              color: "#fff",
              fontFamily: "Inter",
              maxWidth: "580px",
            }}
          >
            Redefine your surroundings with our effortless, reliable,
            sustainable, and swift junk removal. Let us do the job for you while
            you sit back and unwind!
          </Typography>

          <Button
            onClick={() => navigate("/pricing")}
            sx={{
              display: "flex",
              fontSize: { xs: "14px", md: "18px" },
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px 40px",
              height: "60px",
              background:
                "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
              borderRadius: "12.7914px",
              textTransform: "none",
              color: "#fff",
              marginTop: "16px",
              "&:hover": {
                background:
                  "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
                opacity: 0.9,
              },
            }}
          >
            View Pricing & Schedule
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
