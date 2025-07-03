/* eslint-disable no-irregular-whitespace */
import {
  Avatar,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useRef, useState } from "react";
import icon1 from "../../public/icon7.png";
import icon2 from "../../public/icon8.png";
import icon3 from "../../public/icon9.png";
import icon4 from "../../public/icon10.png";
import icon5 from "../../public/icon11.png";
import icon6 from "../../public/icon12.png";
import icon7 from "../../public/icon13.png";
import icon8 from "../../public/icon14.png";
import icon9 from "../../public/icon15.png";
import icon10 from "../../public/icon16.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { testimonials } from "./data";

const leftServices = [
  { id: 1, name: "Same Day/Next Day Removal", icon: icon1 },
  { id: 2, name: "Transparent And Honest Pricing", icon: icon2 },
  { id: 3, name: "Happy And Friendly Team", icon: icon3 },
  { id: 4, name: "Professional Expertise", icon: icon4 },
  { id: 5, name: "Eco-Friendly Disposal", icon: icon5 },
];
const rightServices = [
  { id: 1, name: "Punctual Service", icon: icon6 },
  { id: 2, name: "Hassle-Free Experience", icon: icon7 },
  { id: 3, name: "100% Customer Satisfaction", icon: icon8 },
  { id: 4, name: "Flexible Scheduling", icon: icon9 },
  { id: 5, name: "Responsible Recycling", icon: icon10 },
];

const Services = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            marginTop: "5rem",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "32px", sm: "45px", md: "60px" },
              lineHeight: { xs: "40px", sm: "55px", md: "70px" },
              textAlign: "center",
              color: "#111111",
              fontFamily: "Inter",
            }}
          >
            Live Junk Free
            <span
              style={{
                background:
                  "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              {" "}
              Guarantees
            </span>{" "}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: { xs: "12px", sm: "17px", md: "18px" },
              lineHeight: { xs: "24px", sm: "28px", md: "30px" },
              textAlign: "center",
              color: "#111111",
              width: { xs: "100%", sm: "650px", md: "80%" },
              margin: "auto",
              px: { xs: 0, sm: 0, md: 0 },
            }}
          >
            Everything that offers you unmatched satisfaction after availing of
            our junk removal services in the Greater Toronto Area which
            includes residential junk removal, commercial junk
            removal, demolition and cleanouts. We eliminate the hassle,
            guaranteeing a seamless, effective, economical and environmentally
            responsible experience from beginning to end.
          </Typography>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          marginTop={{ xs: "4rem", sm: "8rem", md: "12rem" }}
        >
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Stack
              spacing={2}
              sx={{ alignItems: { xs: "flex-start", md: "flex-start" } }}
            >
              {leftServices.map((item) => {
                return (
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      justifyContent: {
                        xs: "flex-start",
                        md: "space-between",
                      },
                      flexDirection: { xs: "row", md: "row-reverse" },
                      width: { xs: "100%", md: "350px" },
                      px: { xs: 0, md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        background:
                          "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
                        borderRadius: "50px",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.icon}
                        className="img-fluid rounded-top"
                        alt=""
                      />
                    </Box>
                    <Typography>{item.name}</Typography>
                  </Box>
                );
              })}
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ position: "relative", display: { xs: "none", md: "block" } }}
          >
            <Box
              sx={{
                position: "absolute",
                left: "-40%",
                top: "-40%",
                width: { sm: "70%" },
              }}
            >
              <img src="/object2.png" class="img-fluid rounded-top" alt="" />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <Stack
              spacing={2}
              sx={{ alignItems: { xs: "flex-start", md: "flex-start" } }}
            >
              {rightServices.map((item) => {
                return (
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                    }}
                  >
                    <Box
                      sx={{
                        background:
                          "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
                        borderRadius: "50px",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.icon}
                        class="img-fluid rounded-top"
                        alt=""
                      />
                    </Box>
                    <Typography>{item.name}</Typography>
                  </Box>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          background: "#111111",
          height: { xs: "auto", md: "700px" },
          borderRadius: { xs: "30px 30px 0px 0px", md: "60px 60px 0px 0px" },
          marginTop: { xs: "3rem", sm: "4rem", md: "6rem" },
          position: "relative",
          zIndex: 9,
          paddingTop: { xs: "4rem", md: "7rem" },
          paddingBottom: { xs: "4rem", md: 0 },
        }}
      >
        <Box
          sx={{
            padding: { xs: "0rem 1rem", sm: "0rem 2rem", md: "0rem 4rem" },
            mb: { xs: "3rem", md: "6rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              marginBottom: { xs: "2rem", md: "4rem" },
              paddingX: { xs: "1rem", md: "2rem" },
              gap: { xs: "2rem", md: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                maxWidth: { xs: "100%", md: "60%" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "32px", sm: "45px", md: "60px" },
                  lineHeight: { xs: "40px", sm: "55px", md: "70px" },
                  color: "#ffffff",
                  fontFamily: "Inter",
                }}
              >
                Read what our past
                <span
                  style={{
                    background:
                      "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  {" "}
                  customers say
                </span>{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: { xs: "16px", sm: "17px", md: "18px" },
                  lineHeight: { xs: "24px", sm: "28px", md: "30px" },
                  color: "#ffffff",
                }}
              >
                Welcome to our Reviews Section! Here, you'll find heartfelt
                reviews and experiences shared by our valued customers.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <IconButton
                onClick={() => swiperRef.current.swiper.slidePrev()}
                sx={{
                  width: "50px",
                  height: "50px",
                  background: isBeginning
                    ? "rgba(255, 255, 255, 0.1)"
                    : " #EB4B38 ",
                  color: "#fff",
                  "&:hover": {
                    background: isBeginning
                      ? "rgba(255, 255, 255, 0.2)"
                      : " #EB4B38 ",
                  },
                  opacity: isBeginning ? 0.5 : 1,
                  transition: "all 0.3s ease",
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <IconButton
                onClick={() => swiperRef.current.swiper.slideNext()}
                sx={{
                  width: "50px",
                  height: "50px",
                  background: isEnd ? "rgba(255, 255, 255, 0.1)" : " #EB4B38 ",
                  color: "#fff",
                  "&:hover": {
                    background: isEnd ? "rgba(255, 255, 255, 0.2)" : " #EB4B38",
                  },
                  opacity: isEnd ? 0.5 : 1,
                  transition: "all 0.3s ease",
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Swiper
          ref={swiperRef}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "25px",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
          onSlideChange={handleSlideChange}
          onSwiper={handleSlideChange}
          navigation={false}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1170: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <Box
                sx={{
                  width: { xs: "80%", sm: "90%", md: "300px" },
                  height: "auto",
                  minHeight: { xs: "300px", md: "307px" },
                  background: "#FFFFFF",
                  opacity: 0.95,
                  borderRadius: "10px",
                  padding: { xs: "1.5rem", md: "2rem" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <Avatar
                    sx={{
                      width: { xs: 48, md: 64 },
                      height: { xs: 48, md: 64 },
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        background:
                          "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        fontSize: { xs: "24px", md: "30px" },
                        fontWeight: 600,
                        fontFamily: "Inter",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(17, 17, 17, 0.7)",
                        fontSize: { xs: "12px", md: "16px" },
                        fontFamily: "Inter",
                      }}
                    >
                      {item.desig}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      lineHeight: "1.5rem",
                      fontSize: "18px",
                      letterSpacing: "2px",
                    }}
                  >
                    {item.msg}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "4px", marginTop: "1rem" }}>
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      sx={{
                        color: "#FECC13",
                        fontSize: "24px",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Services;
