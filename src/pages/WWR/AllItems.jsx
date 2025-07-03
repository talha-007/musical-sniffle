import React from "react";
import { Box, Typography } from "@mui/material";

const AllItems = () => (
  <Box sx={{ p: 4, textAlign: "center" }}>
    <Typography variant="h3" sx={{ fontWeight: 700 }}>
      All Removable Items
    </Typography>
    <Typography sx={{ mt: 2 }}>
      A comprehensive list of all items we remove will be shown here.
    </Typography>
  </Box>
);

export default AllItems;
