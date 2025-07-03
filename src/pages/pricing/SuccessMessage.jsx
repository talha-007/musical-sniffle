import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SuccessMessage = ({ onBack, formData, loadSize, bookingData }) => {
  // Format the date to be more readable
  const formatDate = (date) => {
    if (!date) return "";
    const options = { weekday: "short", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          width: "90%",
          my: 4,
          mx: "auto",
          boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
          textAlign: "left",
          background: "#fff",
          p: { xs: 2, md: 4 },
          position: "relative",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: { xs: "28px", sm: "36px", md: "48px" },
            lineHeight: { xs: "38px", sm: "48px", md: "60px" },
            mb: 2,
            background:
              "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            fontFamily: "Inter",
          }}
        >
          Right on, Medge!
          <br />
          You're booked in.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            mb: 2,
            color: "#111111",
            fontFamily: "Inter",
          }}
        >
          We'll be arriving at <b>{formData.address}</b>
          <br />
          on <b>{formatDate(formData.schedule.date)}</b> sometime between{" "}
          <b>{formData.schedule.timeSlot}</b>.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            mb: 2,
            color: "#111111",
            fontFamily: "Inter",
          }}
        >
          Service Type: <b>{formData.service}</b>
          <br />
          Load Size: <b>{loadSize.label}</b> (${loadSize.price})
        </Typography>
        {bookingData && (
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              mb: 2,
              color: "#111111",
              fontFamily: "Inter",
            }}
          >
            Booking Reference: <b>{bookingData.bookingId || bookingData.id}</b>
            {bookingData.estimatedPrice && (
              <>
                <br />
                Estimated Price: <b>${bookingData.estimatedPrice}</b>
              </>
            )}
          </Typography>
        )}
        <Typography
          sx={{
            color: "#EB4B38",
            fontWeight: 600,
            fontSize: { xs: "12px", sm: "16px" },
            fontFamily: "Inter",
            mb: 4,
          }}
        >
          *Check your inbox for a confirmation email containing all these
          details – it will be arriving within a few minutes.
        </Typography>

        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={onBack}
          size="large"
          sx={{
            display: "flex",
            fontSize: { xs: "14px", md: "18px" },
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px 40px",
            height: "60px",
            border: "1px solid",
            borderColor: "#FECC13",
            borderRadius: "12.7914px",
            textTransform: "none",
            color: "#000",
            "&:hover": {
              borderColor: "#EB4B38",
              color: "#000",
              opacity: 0.95,
            },
          }}
        >
          Book Another Pickup
        </Button>
      </Box>
    </Container>
  );
};

export default SuccessMessage;
