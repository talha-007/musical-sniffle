import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const OurPromises = () => {
  return (
    <Box sx={{ backgroundColor: "#FEF7D1", py: "2rem", px: "1rem" }}>
      <Typography
        sx={{
          color: "#EB4B38",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "1.5rem", md: "3rem" },
          mb: 4,
        }}
      >
        Our Promises
      </Typography>
      <Grid container mb={3} spacing={2}>
        <Grid size={{ md: 3, xs: 12 }}>
          <Box sx={{ textAlign: "center" }}>
            <svg
              class="tcb-icon"
              viewBox="0 0 24 28"
              data-name="clock-o"
              width="45"
              height="45"
              fill="#EB4B38"
            >
              <path d="M14 8.5v7c0 0.281-0.219 0.5-0.5 0.5h-5c-0.281 0-0.5-0.219-0.5-0.5v-1c0-0.281 0.219-0.5 0.5-0.5h3.5v-5.5c0-0.281 0.219-0.5 0.5-0.5h1c0.281 0 0.5 0.219 0.5 0.5zM20.5 14c0-4.688-3.813-8.5-8.5-8.5s-8.5 3.813-8.5 8.5 3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z"></path>
            </svg>
            <Typography sx={{ fontWeight: "bold" }}>On-Time</Typography>
            <Typography>
              Our team will call 30 minutes prior to their arrival for your
              removal appointment.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Box sx={{ textAlign: "center" }}>
            <svg
              class="tcb-icon"
              viewBox="0 0 29 28"
              data-name="truck"
              width="45"
              height="45"
              fill="#EB4B38"
            >
              <path d="M10 22c0-1.094-0.906-2-2-2s-2 0.906-2 2 0.906 2 2 2 2-0.906 2-2zM4 14h6v-4h-2.469c-0.063 0-0.297 0.094-0.344 0.141l-3.047 3.047c-0.047 0.047-0.141 0.281-0.141 0.344v0.469zM24 22c0-1.094-0.906-2-2-2s-2 0.906-2 2 0.906 2 2 2 2-0.906 2-2zM28 5v16c0 1.156-1.219 1-2 1 0 2.203-1.797 4-4 4s-4-1.797-4-4h-6c0 2.203-1.797 4-4 4s-4-1.797-4-4h-1c-0.781 0-2 0.156-2-1 0-0.547 0.453-1 1-1v-5c0-1.109-0.156-2.344 0.703-3.203l3.094-3.094c0.391-0.391 1.141-0.703 1.703-0.703h2.5v-3c0-0.547 0.453-1 1-1h16c0.547 0 1 0.453 1 1z"></path>
            </svg>
            <Typography sx={{ fontWeight: "bold" }}>
              We Remove Anything
            </Typography>
            <Typography>
              We can remove virtually anything (except hazardous waste). Just
              point and we do the rest.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Box sx={{ textAlign: "center" }}>
            <svg
              class="tcb-icon"
              viewBox="0 0 28 28"
              data-name="recycle"
              width="45"
              height="45"
              fill="#EB4B38"
            >
              <path d="M13.062 18.266l-0.234 5.75-0.031 0.344-6.563-0.453c-0.812-0.063-1.484-0.828-1.781-1.516-0.625-1.453 0.187-3.172 0.656-4.562 0 0 1.203 0.187 7.953 0.438zM7.016 9.109l2.812 5.922-2.297-1.437c-3.516 4.016-3.844 7-3.844 7l-2.969-5.578c-0.609-0.906-0.063-1.891-0.063-1.891s0.547-0.984 1.781-2.938l-2.188-1.344zM26.25 17.187l-2.938 5.609c-0.406 1.016-1.531 1.109-1.531 1.109s-1.109 0.109-3.422 0.187l0.125 2.562-3.594-5.734 3.297-5.656 0.109 2.703c5.297 0.641 7.953-0.781 7.953-0.781zM13.984 2.75c0 0-0.734 0.969-4.141 6.797l-4.953-2.922-0.297-0.187 3.516-5.563c0.438-0.688 1.422-0.938 2.188-0.859 1.563 0.141 2.688 1.656 3.687 2.734zM24.219 7.547l3.313 5.672c0.422 0.703 0.172 1.687-0.234 2.344-0.844 1.313-2.719 1.625-4.125 2.016 0 0-0.531-1.109-4.141-6.813l4.891-3.047zM21.984 4.016l2.219-1.297-3.437 5.828-6.547-0.313 2.359-1.344c-1.875-4.984-4.359-6.703-4.359-6.703l6.328 0.016c1.094-0.094 1.687 0.844 1.687 0.844s0.609 0.953 1.75 2.969z"></path>
            </svg>
            <Typography sx={{ fontWeight: "bold" }}>
              Recycle & Donate
            </Typography>
            <Typography>
              We partner with local charities and recyclers to extend the life
              of your junk.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Box sx={{ textAlign: "center" }}>
            <svg
              class="tcb-icon"
              viewBox="0 0 20 28"
              data-name="shield"
              width="45"
              height="45"
              fill="#EB4B38"
            >
              <path d="M17 15v-10h-7v17.766c0.797-0.422 2.078-1.156 3.328-2.141 1.672-1.313 3.672-3.359 3.672-5.625zM20 3v12c0 6.578-9.203 10.734-9.594 10.906-0.125 0.063-0.266 0.094-0.406 0.094s-0.281-0.031-0.406-0.094c-0.391-0.172-9.594-4.328-9.594-10.906v-12c0-0.547 0.453-1 1-1h18c0.547 0 1 0.453 1 1z"></path>
            </svg>
            <Typography sx={{ fontWeight: "bold" }}>
              Licensed & Insured
            </Typography>
            <Typography>
              We can remove virtually anything (except hazardous waste). Just
              point and we do the rest.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
