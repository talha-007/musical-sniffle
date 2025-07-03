import React from "react";
import { Box, Typography } from "@mui/material";

const Furniture = () => (
  <Box sx={{ p: 4, textAlign: "center" }}>
    <Typography variant="h3" sx={{ fontWeight: 700 }}>
      Furniture Removal
    </Typography>
    <Typography sx={{ mt: 2 }}>
      Details about furniture removal go here.
    </Typography>
  </Box>
);

export default Furniture;
