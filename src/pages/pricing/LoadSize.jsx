import {
  Box,
  Checkbox,
  FormControlLabel,
  Slider,
  Typography,
} from "@mui/material";

const LoadSize = ({ formData, loadSize, onLoadSizeChange, loadSizes }) => {
  const getCityFromAddress = (address) => {
    if (!address) return "your area";
    const addressParts = address.split(",").map((part) => part.trim());
    return addressParts[0] || "your area";
  };

  console.log(formData);
  return (
    <>
      <Box
        sx={{
          //   position: "absolute",
          //   top: "0px",
          //   left: "0px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: "#FECC13",
            width: "100%",
            textAlign: "center",
            padding: "10px 0px",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.2rem", md: "32px" }, fontWeight: "700" }}
          >
            Pricing for {getCityFromAddress(formData.address)}, On
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#fecb1347",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "14px", md: "18px" },
              padding: "10px 0px",
              fontWeight: 700,
            }}
          >
            Your Appointment:{" "}
            {formData?.schedule?.date
              ? new Date(formData?.schedule?.date).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })
              : "--"}
            {formData?.schedule?.timeSlot
              ? ` arriving ${formData?.schedule?.timeSlot}`
              : ""}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: "1rem", px: 2 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "12px", md: "16px" },
            color: "#4a4a4a",
          }}
        >
          Pricing is based on how much space your junk takes up in our truck.
          Our friendly team will provide a free onsite estimate.
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontWeight: 700, fontSize: "1.5rem" }}
        >
          Slide the knob to view load size examples.
        </Typography>
        <Box sx={{ mt: 4, px: 2 }}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <img
              src={loadSizes[loadSize].image}
              alt={`${loadSizes[loadSize].label} example`}
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "400px",
              }}
            />
          </Box>
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "24px", color: "#FECC13" }}
              fontWeight="bold"
            >
              <span style={{ color: "#000" }}>{loadSizes[loadSize].label}</span>{" "}
              ${loadSizes[loadSize].price}
            </Typography>
          </Box>
          <Box sx={{ px: 2, display: "flex", justifyContent: "center" }}>
            <Slider
              value={loadSize}
              onChange={onLoadSizeChange}
              step={1}
              min={0}
              max={12}
              valueLabelDisplay="off"
              marks={false}
              sx={{
                width: "80%",
                mx: "auto",
                mt: 4,
                "& .MuiSlider-thumb": {
                  width: 36,
                  height: 36,
                  backgroundColor: "#FECC13",
                  border: "3px solid #EB4B38",
                  boxShadow: "none",
                },
                "& .MuiSlider-track": {
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: "#ededed",
                },
                "& .MuiSlider-rail": {
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: "#ededed",
                },
                "& .MuiSlider-mark": {
                  display: "none",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              my: 2,
            }}
          >
            <FormControlLabel
              sx={{
                "& .MuiFormControlLabel-label": { fontWeight: "bold" },
              }}
              control={
                <Checkbox
                  sx={{
                    color: "#EB4B38",
                    borderRadius: "10px",
                    "&.Mui-checked": {
                      color: "#EB4B38",
                    },
                  }}
                  defaultChecked
                />
              }
              label="Save 10% with Driveaway Pickup"
            />
            <Typography sx={{ width: { xs: "90%", md: "60%" } }}>
              To qualify, check the box above and place your junk in an
              accessible location like your porch, driveway or curb side.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoadSize;
