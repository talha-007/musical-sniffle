import React from "react";
import { Box, Typography } from "@mui/material";

const Appliances = () => (
  <Box sx={{ p: 4, textAlign: "center" }}>
    <Typography variant="h3" sx={{ fontWeight: 700 }}>
      Appliances Removal
    </Typography>
    <Typography sx={{ mt: 2 }}>
      Details about appliances removal go here.
    </Typography>
  </Box>
);

export default Appliances;
