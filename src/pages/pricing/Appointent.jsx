import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";
import workersImg from "../../assets/2-guys.png";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";

const Appointent = ({
  date,
  timeSlot,
  onDateChange,
  onTimeSlotChange,
  timeSlots,
}) => {
  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          background: " #FECC13 ",
          py: 2.5,
          borderRadius: "6px 6px 0 0",
          mb: 0,
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontWeight: 700,
            fontSize: { xs: "1rem", md: "1.5rem" },
            letterSpacing: 0.5,
            textAlign: "center",
          }}
        >
          Pick Your Appointment Time
        </Typography>
      </Box>
      {/* Info Bar */}
      <Box
        sx={{
          background: "#FEF7D1",
          borderRadius: 0,
          px: 2,
          py: 1,
          textAlign: "center",
          borderBottom: "1px solid #FECC13",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontWeight: 700,
            fontSize: { xs: ".7rem", md: "1.1rem" },
          }}
        >
          Good news! We can remove your junk as early as:{" "}
          <span style={{ color: "#EB4B38", fontWeight: 700 }}>
            Fri,{" "}
            {new Date().toLocaleString("en-US", {
              month: "short",
              day: "numeric",
            })}{" "}
            (today)
          </span>
        </Typography>
      </Box>
      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        align="center"
        color="#404040"
        sx={{ mt: 2, mb: 0 }}
      >
        Our team will arrive in the 2-hour arrival window of your choice.
      </Typography>
      {/* Calendar Section */}
      <Box sx={{ mt: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#FECC13",
            fontWeight: 700,
            fontSize: { xs: "1rem", md: "1.3rem" },
            mb: 1,
            textAlign: "center",
            textShadow: "0 1px 0 #fff",
          }}
        >
          Select Service Date:
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            value={date}
            onChange={onDateChange}
            minDate={new Date()}
            sx={{
              mx: "auto",
              width: "300px",
              "& .MuiPickersCalendarHeader-root": {
                background: "#FECC13",
                color: "#000",
                borderRadius: "6px 6px 0 0",
              },
              "& .MuiPickersCalendarHeader-label": {
                color: "#000",
                fontWeight: 700,
                fontSize: "1.1rem",
              },
              "& .MuiPickersArrowSwitcher-button": {
                color: "#EB4B38",
              },
              "& .MuiPickersDay-root": {
                fontWeight: 600,
                fontSize: "1.1rem",
                color: "#000",
                "&.Mui-selected": {
                  backgroundColor: "#FECC13",
                  color: "#000",
                },
              },
              "& .MuiDatePickerToolbar-root": {
                display: "none",
              },
              "& .MuiPickersLayout-actionBar": {
                display: "none",
              },
            }}
          />
        </LocalizationProvider>
      </Box>
      {/* Time Slot Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#FECC13",
            fontWeight: 700,
            fontSize: "1.3rem",
            mb: 1,
            textAlign: "center",
            textShadow: "0 1px 0 #fff",
          }}
        >
          2-hour Arrival Window:
        </Typography>
        <FormControl
          fullWidth
          sx={{ maxWidth: { xs: 280, md: 320 }, mx: "auto" }}
        >
          <Select
            value={timeSlot}
            onChange={onTimeSlotChange}
            displayEmpty
            sx={{
              fontWeight: 600,
              color: "#000",
              background: "#fff",
              border: "2px solid #FECC13",
              borderRadius: "6px",
              fontSize: "1.1rem",
              "& .MuiSelect-icon": {
                color: "#EB4B38",
              },
            }}
          >
            <MenuItem value="" disabled>
              Select Time Slot
            </MenuItem>

            {date &&
              timeSlots.map((slot) => (
                <MenuItem
                  key={slot.value}
                  value={slot.value}
                  sx={{ fontWeight: 600, color: "#000" }}
                >
                  {slot.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      {/* Workers Image */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <img
          src={workersImg}
          alt="Workers"
          style={{ maxHeight: 120, margin: "0 auto" }}
        />
      </Box>
      {/* Checkmark Bullets */}
      <Stack
        spacing={1}
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            fontSize: "1.1rem",
          }}
        >
          <span style={{ color: "#FECC13", fontSize: 22, marginRight: 8 }}>
            ✔
          </span>{" "}
          Labour, disposal, & recycling included
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            display: "flex",
            alignItems: "center",
            fontSize: "1.1rem",
          }}
        >
          <span style={{ color: "#FECC13", fontSize: 22, marginRight: 8 }}>
            ✔
          </span>{" "}
          No credit card required
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            display: "flex",
            alignItems: "center",
            fontSize: "1.1rem",
          }}
        >
          <span style={{ color: "#FECC13", fontSize: 22, marginRight: 8 }}>
            ✔
          </span>{" "}
          Free, no obligation estimate
        </Typography>
      </Stack>
    </Box>
  );
};

export default Appointent;
