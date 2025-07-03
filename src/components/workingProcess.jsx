import { Box, Typography, Grid, Container } from "@mui/material";
import React from "react";
import { process } from "./data";

const WorkingProcess = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            marginTop: { xs: "3rem", md: "5rem" },
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "26px", sm: "45px", md: "60px" },
              lineHeight: { xs: "42px", sm: "55px", md: "70px" },
              textAlign: "center",
              color: "#111111",
              fontFamily: "Inter",
            }}
          >
            Efficient{" "}
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
              Working
            </span>{" "}
            Process
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: { xs: "24px", md: "30px" },
              textAlign: "center",
              color: "#111111",
              width: { xs: "100%", md: "646px" },
              margin: "auto",
            }}
          >
            our working process is designed to deliver efficient, reliable, &
            tailored junk removal. From the initial consultation to the final
            delivery,
          </Typography>
        </Box>
        <Grid container spacing={4} mt={8} mb={16}>
          {process?.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
              <Box
                sx={{
                  height: "268px",
                  background: "#FFFFFF",
                  boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.15)",
                  borderRadius: "5px",
                }}
              >
                {/* Content container - transformed back to normal */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    gap: "1.3rem",
                  }}
                >
                  <Box
                    component="img"
                    src={`/icon${item.id}.png`}
                    alt={`Process ${item.id}`}
                  />

                  {/* Text content */}
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: { xs: "16px", sm: "24px" },
                        lineHeight: "29px",
                        textAlign: "center",
                        color: "#111111",
                        mb: 1,
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "30px",
                        textAlign: "center",
                        color: "#111111",
                        width: "266px",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default WorkingProcess;
