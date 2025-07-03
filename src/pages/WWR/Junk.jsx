import React from "react";
import { Box, Typography } from "@mui/material";

const Junk = () => (
  <Box sx={{ p: 4, textAlign: "center" }}>
    <Typography variant="h3" sx={{ fontWeight: 700 }}>
      Junk Removal
    </Typography>
    <Typography sx={{ mt: 2 }}>Details about junk removal go here.</Typography>
  </Box>
);

export default Junk;
