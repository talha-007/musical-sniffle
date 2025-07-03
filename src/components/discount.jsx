import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Discount = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          background: "#111111",
          borderRadius: "20px",
          height: { xs: "auto", md: "438px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 3, sm: 6, md: 10, lg: 14 }, // responsive horizontal padding
          py: { xs: 4, md: 0 },
          mt: { xs: 5, md: 10 },
          mb: { xs: 5, md: 10 },
          position: "relative",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Right decoration image */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: { xs: "120px", sm: "120px", md: "unset" },
          }}
        >
          <img src="/object3.png" alt="" style={{ width: "100%" }} />
        </Box>

        {/* Left decoration image */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: { xs: "120px", sm: "120px", md: "unset" },
          }}
        >
          <img src="/object4.png" alt="" style={{ width: "100%" }} />
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            gap: 3,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              lineHeight: { xs: "38px", sm: "48px", md: "60px" },
              color: "#ffffff",
              fontFamily: "Inter",
              flex: 1,
            }}
          >
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
              SAVE $20!{" "}
            </span>
            Same and next day appointments available
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate("/pricing")}
            sx={{
              background:
                "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
              color: "#fff",
              borderRadius: "12px",
              fontSize: { xs: "16px", sm: "18px" },
              fontWeight: "600",
              width: { xs: "150px", sm: "190px" },
              height: { xs: "50px", sm: "60px" },
              mt: { xs: 3, md: 0 },
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Discount;
