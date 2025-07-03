import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ChooseService = ({ selectedService, onServiceChange }) => {
  return (
    <>
      <Box sx={{ background: "#FECC13", padding: "16px 0px" }}>
        <Typography
          align="center"
          sx={{
            fontFamily: "Bebas Neue",
            fontWeight: "700",
            mb: 0,
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
          gutterBottom
        >
          Choose Your Service
        </Typography>
      </Box>
      <Box sx={{ px: 4 }}>
        <RadioGroup
          value={selectedService}
          onChange={onServiceChange}
          sx={{ mt: 2 }}
        >
          <Box sx={{ mb: 3 }}>
            <FormControlLabel
              value="full"
              control={<Radio />}
              label={
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: { xs: "14px", md: "16px" } }}
                    fontWeight="bold"
                  >
                    Full Service
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Removal from Anywhere! In-home, backyard, etc
                  </Typography>
                </Box>
              }
              sx={{
                alignItems: "flex-start",
                "& .MuiFormControlLabel-label": {
                  marginTop: 0.5,
                },
              }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <FormControlLabel
              value="dwpu"
              control={<Radio />}
              label={
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: { xs: "14px", md: "16px" } }}
                    fontWeight="bold"
                  >
                    Curbside Pickup (SAVE 10%)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Removal from your driveway, garage, or curbside
                  </Typography>
                </Box>
              }
              sx={{
                alignItems: "flex-start",
                "& .MuiFormControlLabel-label": {
                  marginTop: 0.5,
                },
              }}
            />
          </Box>
        </RadioGroup>
      </Box>
    </>
  );
};

export default ChooseService;
