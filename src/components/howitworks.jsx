import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
} from "@mui/material";
import icon1 from "../../public/icon1.svg";
import icon2 from "../../public/icon2.svg";
import icon3 from "../../public/icon3.svg";
const steps = [
  {
    icon: icon1,
    title: "Book a Slot for a Pickup",
    description: (
      <>
        Check your routine and get in touch with us through a call or website to{" "}
        <span style={{ color: "#FF6B6B" }}>schedule an appointment</span> for
        cleaning at a convenient date and time.
      </>
    ),
  },
  {
    icon: icon2,
    title: "We Show Up and Clean Out",
    description: (
      <>
        <span style={{ color: "#FF6B6B" }}>Our professionals</span> are punctual
        in visiting your place and take charge of lifting and promptly removing
        your undesired goods from there on.
      </>
    ),
  },
  {
    icon: icon3,
    title: "Ecological & Responsible Disposal",
    description:
      "After thorough cleaning, we haul the trash and dispose of it in an environmentally responsible manner by recycling and reusing it.",
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ maxWidth: "1680px", margin: "auto" }}>
      <Box sx={{ py: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: { xs: 3, md: 6 },
            fontSize: { xs: "30px", sm: "40px", md: "48px" },
          }}
        >
          This Is How It{" "}
          <Box
            component="span"
            sx={{
              background:
                "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Works
          </Box>
        </Typography>

        <Grid container spacing={2}>
          {/* Left - Steps */}
          <Grid size={{ xs: 12, md: 6 }}>
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  my: 6,
                  mx: 1,
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    bgcolor: "#FFECEC",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={step.icon} class="img-fluid rounded-top" alt="" />
                </Box>
                <Box
                  sx={{ width: "70%", textAlign: { xs: "center", md: "left" } }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {step.title}
                  </Typography>
                  <Typography sx={{ color: "#555" }}>
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Right - Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 3,
                boxShadow: "0 0 20px rgba(0,0,0,0.1)",
                p: 4,
                m: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "24px", md: "36px" },
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                Connect Us To Free <br />
                <Box
                  component="span"
                  sx={{
                    color: "#EB4B38",
                  }}
                >
                  your Space
                </Box>
              </Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField label="First name" fullWidth />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField label="Last name" fullWidth />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField label="Email" fullWidth />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField label="Phone Number" fullWidth />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField label="Zip Code" fullWidth />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  py: 1.5,
                  background:
                    "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "16px",
                  borderRadius: "12px",
                }}
              >
                Schedule Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HowItWorks;
