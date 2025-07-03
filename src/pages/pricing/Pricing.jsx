import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChooseService from "./ChooseService";
import Appointent from "./Appointent";
import LoadSize from "./LoadSize";
import FinalStep from "./FinalStep";
import SuccessMessage from "./SuccessMessage";
import appointmentService from "../../../redux/api/appointmentServices";
import img1 from "../../assets/load/1.jpg";
import img2 from "../../assets/load/2.jpg";
import img3 from "../../assets/load/3.jpg";
import img4 from "../../assets/load/4.jpg";
import img5 from "../../assets/load/5.jpg";
import img6 from "../../assets/load/6.jpg";
import img7 from "../../assets/load/7.jpg";
import img8 from "../../assets/load/8.jpg";
import img9 from "../../assets/load/9.jpg";
import img10 from "../../assets/load/10.jpg";
import img11 from "../../assets/load/11.jpg";
import img12 from "../../assets/load/12.jpg";
import img13 from "../../assets/load/13.jpg";
import { toast } from "react-toastify";

const CITY_CATEGORIES = {
  CATEGORY_1: ["Brampton", "Bolton", "Caledon", "Vaughan"],
  CATEGORY_2: [
    "Mississauga",
    "Milton",
    "Richmond Hill",
    "Markham",
    "Oakville",
    "King City",
    "North York",
  ],
  CATEGORY_3: ["Toronto", "Ajax", "Etobicoke", "Pickering"],
};

const getLoadSizesByCategory = (category) => {
  const baseLoadSizes = [
    { value: 0, label: "Min Load", image: img1 },
    { value: 1, label: "1/8 Load", image: img2 },
    { value: 2, label: "1/6 Load", image: img3 },
    { value: 3, label: "1/4 Load", image: img4 },
    { value: 4, label: "1/3 Load", image: img5 },
    { value: 5, label: "3/8 Load", image: img6 },
    { value: 6, label: "1/2 Load", image: img7 },
    { value: 7, label: "5/8 Load", image: img8 },
    { value: 8, label: "2/3 Load", image: img9 },
    { value: 9, label: "3/4 Load", image: img10 },
    { value: 10, label: "5/6 Load", image: img11 },
    { value: 11, label: "7/8 Load", image: img12 },
    { value: 12, label: "Full Load", image: img13 },
  ];

  const prices = {
    CATEGORY_1: [
      115, 139, 179, 249, 300, 345, 400, 449, 485, 525, 559, 590, 610,
    ],
    CATEGORY_2: [
      135, 159, 210, 280, 349, 385, 469, 520, 559, 610, 649, 669, 680,
    ],
    CATEGORY_3: [
      139, 169, 219, 299, 359, 399, 479, 539, 569, 619, 659, 679, 699,
    ],
  };

  return baseLoadSizes.map((loadSize, index) => ({
    ...loadSize,
    price: prices[category][index],
  }));
};

const steps = ["Select Service", "Choose Schedule", "Pricing", "Confirmation"];

const timeSlots = [
  { value: "8:00am - 10:00am", label: "8:00am - 10:00am" },
  { value: "8:30am - 10:30am", label: "8:30am - 10:30am" },
  { value: "9:00am - 11:00am", label: "9:00am - 11:00am" },
  { value: "9:30am - 11:30am", label: "9:30am - 11:30am" },
  { value: "10:00am - 12:00pm", label: "10:00am - 12:00pm" },
  { value: "10:30am - 12:30pm", label: "10:30am - 12:30pm" },
  { value: "11:00am - 1:00pm", label: "11:00am - 1:00pm" },
  { value: "11:30am - 1:30pm", label: "11:30am - 1:30pm" },
  { value: "12:00pm - 2:00pm", label: "12:00pm - 2:00pm" },
  { value: "12:30pm - 2:30pm", label: "12:30pm - 2:30pm" },
  { value: "1:00pm - 3:00pm", label: "1:00pm - 3:00pm" },
  { value: "1:30pm - 3:30pm", label: "1:30pm - 3:30pm" },
  { value: "2:00pm - 4:00pm", label: "2:00pm - 4:00pm" },
  { value: "2:30pm - 4:30pm", label: "2:30pm - 4:30pm" },
  { value: "3:00pm - 5:00pm", label: "3:00pm - 5:00pm" },
  { value: "3:30pm - 5:30pm", label: "3:30pm - 5:30pm" },
  { value: "4:00pm - 6:00pm", label: "4:00pm - 6:00pm" },
  { value: "4:30pm - 6:30pm", label: "4:30pm - 6:30pm" },
];

const Pricing = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const [address, setAddress] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [formData, setFormData] = useState({
    address: "",
    service: "",
    schedule: {
      date: null,
      timeSlot: "",
    },
    review: "",
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
  const [loadSize, setLoadSize] = useState(0);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const addressInputRef = useRef(null);
  const finalStepRef = useRef();

  // Initialize Google Places Autocomplete
  useEffect(() => {
    if (window.google && addressInputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        addressInputRef.current,
        {
          types: ["address"],
          componentRestrictions: { country: "ca" }, // Restrict to Canada
          fields: ["address_components", "formatted_address", "geometry"],
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          setAddress(place.formatted_address);
          const cityInfo = getCityFromAddress(place.formatted_address);
          if (cityInfo) {
            setSelectedCity(cityInfo);
          }
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      });
    }
  }, []);

  const getCityFromAddress = (address) => {
    const addressParts = address.split(",").map((part) => part.trim());
    for (const part of addressParts) {
      // Check each category
      for (const [category, cities] of Object.entries(CITY_CATEGORIES)) {
        if (cities.some((city) => part.toLowerCase() === city.toLowerCase())) {
          return { city: part, category };
        }
      }
    }
    return null;
  };

  const handleAddressChange = (e) => {
    const newAddress = e.target.value;
    setAddress(newAddress);
    setIsValid(false);
    setSelectedCity(null);
  };

  const handleAddressSubmit = () => {
    if (isValid) {
      setFormData((prev) => ({ ...prev, address }));
      setActiveStep(0);
    }
  };

  const handleServiceChange = (event) => {
    setFormData((prev) => ({ ...prev, service: event.target.value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      schedule: { ...prev.schedule, date },
    }));
  };

  const handleTimeSlotChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      schedule: { ...prev.schedule, timeSlot: event.target.value },
    }));
  };

  const handleLoadSizeChange = (event, newValue) => {
    setLoadSize(newValue);
  };

  const handleFormDataChange = (newFormData) => {
    setFormData(newFormData);
  };

  // Get the appropriate load sizes based on the selected city category
  const currentLoadSizes = selectedCity
    ? getLoadSizesByCategory(selectedCity.category)
    : getLoadSizesByCategory("CATEGORY_1"); // Default to Category 1 if no city selected

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      // Validate FinalStep before proceeding
      if (finalStepRef.current && !finalStepRef.current.validate()) {
        return; // Don't proceed if validation fails
      }

      try {
        const appointmentData = {
          ...formData,
          first_name: formData.firstName,
          last_name: formData.lastName,
          unit_number: formData.unitNumber,
          schedule_date: formData.schedule.date,
          time_slot: formData.schedule.timeSlot,
          load_size_label: currentLoadSizes[loadSize].label,
          load_size_price: currentLoadSizes[loadSize].price,
          load_size_value: currentLoadSizes[loadSize].value,
        };
        delete appointmentData.schedule;

        const response = await appointmentService.createAppointment(
          appointmentData
        );
        if (response.status === 201) {
          toast.success(response.data.message);
          setBookingData(response.data);
          setBookingSuccess(true);
        }
      } catch (error) {
        console.error("Error creating appointment:", error);
        toast.error(error.response.data.message);
        // You might want to show an error message to the user here
      }
      return;
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBackToStart = () => {
    setBookingSuccess(false);
    setBookingData(null);
    setActiveStep(-1);
    setAddress("");
    setIsValid(false);
    setFormData({
      address: "",
      service: "",
      schedule: {
        date: null,
        timeSlot: "",
      },
      review: "",
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
    setLoadSize(0);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const isStepValid = (step) => {
    switch (step) {
      case 0:
        return !!formData.service;
      case 1:
        return !!formData.schedule.date && !!formData.schedule.timeSlot;
      case 2:
        return loadSize >= 0;
      case 3:
        return true; // Final step is always valid
      default:
        return false;
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <ChooseService
            onServiceChange={handleServiceChange}
            selectedService={formData.service}
          />
        );
      case 1:
        return (
          <Appointent
            date={formData.schedule.date}
            timeSlot={formData.schedule.timeSlot}
            onDateChange={handleDateChange}
            onTimeSlotChange={handleTimeSlotChange}
            timeSlots={timeSlots}
          />
        );
      case 2:
        return (
          <LoadSize
            loadSize={loadSize}
            onLoadSizeChange={handleLoadSizeChange}
            loadSizes={currentLoadSizes}
            formData={formData}
          />
        );
      case 3:
        return (
          <FinalStep
            ref={finalStepRef}
            formData={formData}
            loadSize={currentLoadSizes[loadSize]}
            setActiveStep={setActiveStep}
            onFormDataChange={handleFormDataChange}
          />
        );
      default:
        return "Unknown step";
    }
  };

  if (bookingSuccess) {
    return (
      <SuccessMessage
        onBack={handleBackToStart}
        formData={formData}
        loadSize={currentLoadSizes[loadSize]}
        bookingData={bookingData}
      />
    );
  }

  // Show address input if no step is active
  if (activeStep === -1) {
    return (
      <Container maxWidth="md">
        <Box
          sx={{
            width: "90%",
            my: 4,
            mx: "auto",
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
            padding: { xs: "0px", md: "1rem 0rem" },
            overflow: "hidden",
          }}
        >
          <Box sx={{ background: "#FECC13", padding: "16px 0px" }}>
            <Typography
              align="center"
              sx={{
                fontWeight: "700",
                fontFamily: "Bebas Neue",
                fontSize: { xs: "1rem", md: "1.5rem" },
              }}
              gutterBottom
            >
              Let's get started by entering your pickup address.
            </Typography>
          </Box>
          <Stack spacing={3} sx={{ p: { xs: 2, md: 4 } }}>
            <Box sx={{ position: "relative" }}>
              <TextField
                fullWidth
                placeholder="Pickup Address"
                value={address}
                onChange={handleAddressChange}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: isValid ? "success.main" : "primary.main",
                    },
                  },
                }}
                inputRef={addressInputRef}
              />
              {isValid && (
                <CheckCircleIcon
                  color="success"
                  sx={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              )}
            </Box>

            <Stack spacing={1} alignItems="center">
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "10px", md: "14px" } }}
                color="text.secondary"
              >
                No credit card required.
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "10px", md: "14px" } }}
                color="text.secondary"
              >
                Cancel or reschedule any time.
              </Typography>
            </Stack>

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={handleAddressSubmit}
                disabled={!isValid}
                size="large"
                sx={{
                  display: "flex",
                  fontSize: { xs: "14px", md: "18px" },
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: { xs: "8px 30px", md: "15px 40px" },
                  height: { xs: "45px", md: "60px" },
                  background:
                    "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
                  borderRadius: "12.7914px",
                  textTransform: "none",
                  "&:hover": {
                    background:
                      "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
                    opacity: 0.9,
                  },
                }}
              >
                Next
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    );
  }

  // Show steps after address is entered
  return (
    <>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",

            flexDirection: "column",
            py: 4,
          }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h6" color="text.secondary">
              Step {activeStep + 1} of 4
            </Typography>
          </Box>
          <Box
            sx={{
              width: { md: "100%" },
              position: "relative",
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            {getStepContent(activeStep)}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                p: 4,
              }}
            >
              <Button
                onClick={handleBack}
                sx={{
                  display: "flex",
                  fontSize: { xs: "14px", md: "18px" },
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: { xs: "8px 30px", md: "15px 40px" },
                  height: { xs: "45px", md: "60px" },
                  border: "1px solid",
                  borderColor: " #EB4B38",
                  color: "#EB4B38",
                  borderRadius: "12.7914px",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: " #FECC13 ",
                    color: "#FECC13",
                    opacity: 0.95,
                  },
                }}
                variant="outlined"
                size="large"
                disabled={activeStep === -1}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={handleNext}
                disabled={!isStepValid(activeStep)}
                size="large"
                sx={{
                  display: "flex",
                  fontSize: { xs: "14px", md: "18px" },
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: { xs: "8px 30px", md: "15px 40px" },
                  height: { xs: "45px", md: "60px" },
                  background:
                    "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
                  borderRadius: "12.7914px",
                  textTransform: "none",
                  "&:hover": {
                    background:
                      "linear-gradient(91.4deg, #EB4B38 -15.85%, #FECC13 70.52%)",
                    color: "#000",
                    opacity: 0.95,
                  },
                }}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Pricing;
