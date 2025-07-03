import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, forwardRef, useImperativeHandle } from "react";

const FinalStep = forwardRef(
  ({ formData, setActiveStep, onFormDataChange }, ref) => {
    const [localFormData, setLocalFormData] = useState({
      description: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      unitNumber: "",
      isBusiness: false,
      optIn: false,
      discountCode: "",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
      const newErrors = {};
      if (!localFormData.firstName)
        newErrors.firstName = "First name is required";
      if (!localFormData.lastName) newErrors.lastName = "Last name is required";
      if (!localFormData.phone) newErrors.phone = "Phone is required";
      else if (localFormData.phone.length < 10)
        newErrors.phone = "Phone must be at least 10 digits";
      if (!localFormData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(localFormData.email))
        newErrors.email = "Email is invalid";
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    // Expose validate method to parent
    useImperativeHandle(ref, () => ({
      validate,
    }));

    const handleInputChange = (e) => {
      const { id, value } = e.target;

      // Special handling for phone field to only allow numbers
      if (id === "phone") {
        const numericValue = value.replace(/[^0-9]/g, "");
        setLocalFormData((prev) => ({
          ...prev,
          [id]: numericValue,
        }));
        onFormDataChange({
          ...formData,
          [id]: numericValue,
        });
        setErrors((prev) => ({ ...prev, phone: undefined }));
        return;
      }

      setLocalFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
      onFormDataChange({
        ...formData,
        [id]: value,
      });
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    };

    const handleCheckboxChange = (e) => {
      const { id, checked } = e.target;
      setLocalFormData((prev) => ({
        ...prev,
        [id]: checked,
      }));
      onFormDataChange({
        ...formData,
        [id]: checked,
      });
    };

    const textFieldStyles = {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#FECC13",
        },
        "&:hover fieldset": {
          borderColor: "#EB4B38",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#EB4B38",
        },
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#EB4B38",
      },
    };

    return (
      <Box>
        <Box
          sx={{
            background: " #FECC13 ",
            py: 2.5,
            borderRadius: "6px 6px 0 0",
            mb: 0,
          }}
        >
          {/* Header */}
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            sx={{ fontWeight: 700, fontSize: { xs: "1rem", md: "1.5rem" } }}
          >
            You're Almost Done!
          </Typography>
        </Box>
        {/* Appointment Summary */}
        <Box
          sx={{
            background: "#FEF7D1",
            mt: 0,
            p: 3,
          }}
        >
          <Typography
            align="center"
            fontWeight="bold"
            sx={{ fontSize: "1.2rem" }}
          >
            Your Appointment:&nbsp;
            <span style={{ color: "rgb(15, 85, 63)" }}>
              {formData.schedule.date
                ? new Date(formData.schedule.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })
                : "--"}
              {formData.schedule.timeSlot
                ? ` arriving ${formData.schedule.timeSlot}`
                : ""}
            </span>
            <Button
              size="small"
              variant="outlined"
              sx={{
                ml: 2,
                fontSize: "0.9rem",
                py: 0.5,
                px: 1.5,
                minWidth: 0,
                borderColor: "#EB4B38",
                color: "#EB4B38",
              }}
              onClick={() => setActiveStep(1)}
            >
              <i className="fa fa-pencil" style={{ marginRight: 6 }} /> Change
            </Button>
          </Typography>
        </Box>
        {/* Info Text */}
        <Box
          sx={{
            p: 3,
          }}
        >
          <Typography align="center" sx={{ mb: 2 }}>
            We'll need some brief contact and removal information.
          </Typography>
          <form>
            <Stack spacing={2}>
              <Box>
                <Typography variant="h6">
                  Describe the junk to be removed
                </Typography>
                <TextField
                  multiline
                  minRows={2}
                  placeholder="Example: couch on main floor, brush in the backyard"
                  fullWidth
                  id="description"
                  value={localFormData.description}
                  onChange={handleInputChange}
                  sx={{ mt: 1, ...textFieldStyles }}
                />
              </Box>
              <Box>
                <Typography variant="h6">Contact info</Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    fullWidth
                    placeholder="First Name"
                    id="firstName"
                    value={localFormData.firstName}
                    onChange={handleInputChange}
                    sx={textFieldStyles}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                  />
                  <TextField
                    fullWidth
                    placeholder="Last Name"
                    id="lastName"
                    value={localFormData.lastName}
                    onChange={handleInputChange}
                    sx={textFieldStyles}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                  />
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    fullWidth
                    placeholder="Phone #"
                    id="phone"
                    value={localFormData.phone}
                    onChange={handleInputChange}
                    sx={textFieldStyles}
                    inputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      maxLength: 15,
                    }}
                    error={!!errors.phone}
                    helperText={errors.phone}
                  />
                  <TextField
                    fullWidth
                    placeholder="Email Address"
                    id="email"
                    value={localFormData.email}
                    onChange={handleInputChange}
                    sx={textFieldStyles}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Stack>
              </Box>
              <Box>
                <Typography variant="h6">Pickup location</Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid size={{ xs: 2, md: 2 }}>
                    <TextField
                      fullWidth
                      placeholder="Unit No."
                      id="unitNumber"
                      size="small"
                      value={localFormData.unitNumber}
                      onChange={handleInputChange}
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid size={{ xs: 10, md: 10 }}>
                    <TextField
                      fullWidth
                      id="form-address"
                      size="small"
                      disabled
                      value={formData.address || ""}
                      InputProps={{ readOnly: true }}
                      sx={textFieldStyles}
                    />
                  </Grid>
                </Grid>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    mt: 1,
                    fontSize: "0.9rem",
                    py: 0.5,
                    px: 1.5,
                    minWidth: 0,
                    borderColor: "#EB4B38",
                    color: "#EB4B38",
                  }}
                  onClick={() => setActiveStep(1)}
                >
                  <i className="fa fa-pencil" style={{ marginRight: 6 }} />{" "}
                  Change Address
                </Button>
              </Box>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#EB4B38",
                      borderRadius: "10px",
                      "&.Mui-checked": {
                        color: "#EB4B38",
                      },
                    }}
                    id="isBusiness"
                    checked={localFormData.isBusiness}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Is this a business?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#EB4B38",
                      borderRadius: "10px",
                      "&.Mui-checked": {
                        color: "#EB4B38",
                      },
                    }}
                    id="optIn"
                    checked={localFormData.optIn}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Send me promotions in the future!"
              />
              <Stack direction="row" spacing={2} alignItems="center">
                <TextField
                  sx={{
                    width: 180,
                    textTransform: "uppercase",
                    ...textFieldStyles,
                  }}
                  size="small"
                  placeholder="Discount Code"
                  id="discountCode"
                  value={localFormData.discountCode}
                  onChange={handleInputChange}
                  inputProps={{ style: { textTransform: "uppercase" } }}
                />
                <Button
                  variant="contained"
                  size="small"
                  sx={{ background: "#EB4B38", color: "#fff" }}
                >
                  Apply Coupon
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
        {/* Email Confirmation Note */}
        <Box
          sx={{
            background: "#FEF7D1",
            p: 3,
          }}
        >
          <Typography align="center" fontWeight="bold">
            We'll send an email with all your details after booking.
          </Typography>
        </Box>
      </Box>
    );
  }
);

export default FinalStep;
