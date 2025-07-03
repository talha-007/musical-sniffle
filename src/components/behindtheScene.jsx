import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const BehindTheScene = () => {
  return (
    <Box
      sx={{
        background: "#111111",
        height: { xs: "auto", md: "757px" },
        borderRadius: { xs: "30px 30px 0px 0px", md: "60px 60px 0px 0px" },
        paddingTop: { xs: "3rem", md: "5rem" },
        paddingBottom: { xs: "3rem", md: 0 },
        position: "relative",
        px: { xs: 1, md: 2 },
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: "1680px", margin: "auto", px: { xs: 2, md: 0 } }}>
        <Grid container spacing={{ xs: 4, md: 12 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontSize: { xs: "32px", sm: "45px", md: "60px" },
                fontWeight: "600",
                color: "#fff",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              The{" "}
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
                Magic Behind
              </span>{" "}
              the Scenes
            </Typography>
            <Box
              sx={{
                position: { xs: "static", md: "absolute" },
                bottom: "0px",
                left: "0px",
                display: { xs: "none", md: "block" },
              }}
            >
              <img
                src="/object1.png"
                className="img-fluid rounded-top"
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ paddingTop: { xs: "1rem", md: "1.5rem" } }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "12px", md: "17px" },
                textAlign: { xs: "center", md: "left" },
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
                Junk Removal
              </span>{" "}
              Empire is your fast, local, professional and 100% Canadian
              Brampton junk and garbage removal service. We remove anything from
              anywhere and provide same day service to homes and businesses in
              Brampton ON. Common items and materials we remove are furniture,
              appliances, construction and renovation debris, household junk and
              clutter, electronics, hot tubs, shed demolition, garbage and
              basement cleanouts.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: "16px",
                marginTop: { xs: "3rem", md: "12rem" },
              }}
            >
              <Box
                sx={{
                  borderRadius: "10px",
                  width: { xs: "100%", md: "449px" },
                  height: "277px",
                  background: "#fff",
                  opacity: "0.95",
                  position: "relative",
                  mt: "35px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    background: "#EB4B38",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "50%",
                    top: "-35px",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                  }}
                >
                  <img
                    src="/icon5.png"
                    className="img-fluid rounded-top"
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "29px",
                      color: "#111111",
                      textAlign: "center",
                      mt: "16px",
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    sx={{
                      width: { xs: "280px", md: "309px" },
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: { xs: "14px", md: "18px" },
                      lineHeight: { xs: "18px", md: "30px" },
                      textAlign: "center",
                      color: "#626161",
                      mt: 2,
                      mx: "auto",
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
                        fontWeight: "700",
                      }}
                    >
                      Junk Removal
                    </span>{" "}
                    Empire vision is to become a leading source of trusted
                    information and solutions in the waste and disposal industry
                    by attracting, engaging.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  borderRadius: "10px",
                  width: { xs: "100%", md: "449px" },
                  height: "277px",
                  background: "#fff",
                  opacity: "0.95",
                  position: "relative",
                  mt: "35px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    background: "#EB4B38",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "50%",
                    top: "-35px",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                  }}
                >
                  <img
                    src="/icon5.png"
                    className="img-fluid rounded-top"
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "29px",
                      color: "#111111",
                      textAlign: "center",
                      mt: "16px",
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    sx={{
                      width: { xs: "280px", md: "309px" },
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: { xs: "14px", md: "18px" },
                      lineHeight: { xs: "18px", md: "30px" },
                      textAlign: "center",
                      color: "#626161",
                      mt: 2,
                      mx: "auto",
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
                        fontWeight: "700",
                      }}
                    >
                      Junk Removal
                    </span>{" "}
                    Empire mission is to drive meaningful growth by delivering
                    high-quality, search-optimized content that connects with a
                    targeted audience.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BehindTheScene;
