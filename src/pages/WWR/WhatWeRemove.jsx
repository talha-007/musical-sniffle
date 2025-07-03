import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Button } from "@mui/material";
import img1 from "../../assets/whatweremove/item-furniture.jpg";
import img2 from "../../assets/whatweremove/item-junk.jpg";
import img3 from "../../assets/whatweremove/item-appliances.jpg";
import img4 from "../../assets/whatweremove/item-pianos.jpg";
import img5 from "../../assets/whatweremove/item-hot-tubs.jpg";
import img6 from "../../assets/whatweremove/item-pallets.jpg";
import img7 from "../../assets/whatweremove/item-exercise-equipment.jpg";
import img8 from "../../assets/whatweremove/item-reno-debris.jpg";
import WorkingProcess from "../../components/workingProcess";

const items = [
  {
    name: "Furniture",
    image: img1,
    // route: "/what_we_remove/furniture",
  },
  {
    name: "Junk",
    image: img2,
    // route: "/what_we_remove/junk",
  },
  {
    name: "Appliances",
    image: img3,
    // route: "/what_we_remove/appliances",
  },
  {
    name: "Pianos",
    image: img4,
    // route: "/what_we_remove/pianos",
  },
  {
    name: "Hot Tubs",
    image: img5,
    // route: "/what_we_remove/hot-tubs",
  },
  {
    name: "Pallets",
    image: img6,
    // route: "/what_we_remove/pallets",
  },
  {
    name: "Exercise Equipment",
    image: img7,
    // route: "/what_we_remove/exercise-equipment",
  },
  {
    name: "Construction Debris",
    image: img8,
    // route: "/what_we_remove/construction-debris",
  },
];

const WhatWeRemove = () => {
  return (
    <>
      <Box
        sx={{ maxWidth: "1200px", margin: "auto", textAlign: "center", py: 6 }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "26px", sm: "45px", md: "60px" },
            lineHeight: { xs: "42px", sm: "55px", md: "70px" },
            textAlign: "center",
            color: "#111111",
            fontFamily: "Inter",
            mb: 4,
          }}
        >
          We{" "}
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
            remove
          </span>{" "}
          almost everything!
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {items.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={item.name}>
              <Link to={item.route} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    position: "relative",
                    height: "130px",
                    overflow: "hidden",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.2s",
                    cursor: "pointer",
                    ":hover": { transform: "scale(1.03)" },
                  }}
                >
                  {/* Black overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(0,0,0,0.45)",
                      zIndex: 1,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#fff",
                      fontWeight: 700,
                      fontFamily: "Bebas Neue, Inter, sans-serif",
                      fontSize: 36,
                      textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                      width: "100%",
                      zIndex: 2,
                      position: "relative",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
        {/* <Button
          variant="contained"
          sx={{
            mt: 6,
            background: "#EB4B38",
            color: "#fff",
            fontWeight: 700,
            fontSize: 16,
            borderRadius: 2,
            px: 4,
            py: 2,
            boxShadow: 2,
            ":hover": { background: "#eb4a38a8" },
          }}
          component={Link}
          to="#what_we_remove/all"
        >
          View All Items
        </Button> */}
      </Box>
      <WorkingProcess />
    </>
  );
};

export default WhatWeRemove;
