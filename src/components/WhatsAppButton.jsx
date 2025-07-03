import React from "react";
import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    // Format the phone number to remove any non-numeric characters
    const formattedNumber = phoneNumber.replace(/\D/g, "");
    // Open WhatsApp with the phone number
    window.open(`https://wa.me/${formattedNumber}`, "_blank");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 20, md: 30 },
        right: { xs: 20, md: 30 },
        zIndex: 1000,
        display: { xs: "block", md: "none" }, // Only show on mobile
      }}
    >
      <IconButton
        onClick={handleWhatsAppClick}
        sx={{
          backgroundColor: "#25D366",
          color: "white",
          width: 60,
          height: 60,
          "&:hover": {
            backgroundColor: "#128C7E",
          },
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 35 }} />
      </IconButton>
    </Box>
  );
};

export default WhatsAppButton;
