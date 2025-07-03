import { Container, Typography } from "@mui/material";
import React from "react";
import WorkingProcess from "../components/workingProcess";
import { OurPromises } from "../components/OurPromises";

const About = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "26px", sm: "45px", md: "60px" },
            lineHeight: { xs: "42px", sm: "55px", md: "70px" },
            textAlign: "center",
            color: "#111111",
            fontFamily: "Inter",
            my: 4,
          }}
        >
          {" "}
          About{" "}
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
            Us
          </span>{" "}
        </Typography>{" "}
        <Typography mb={2}>
          Welcome to{" "}
          <span style={{ fontWeight: "bold", color: "#EB4B38" }}>
            {" "}
            Junk Removal Empire
          </span>{" "}
          – your trusted team for fast, affordable, and eco-friendly junk
          removal in Brampton, Mississauga, Bolton, Caledon, Vaughan, Richmond
          Hill, Markham, Scarborough, Toronto, Woodbridge, Etobicoke, Oakville,
          Milton, and Burlington. We’re proud to serve these communities with
          reliable and professional junk hauling services designed to clear your
          clutter and give you back your space—stress-free.
        </Typography>{" "}
        <Typography mb={2}>
          Whether you’re a homeowner cleaning out your garage, a contractor
          clearing renovation debris, or a business needing a full office
          cleanout, our team is ready to take on any job—big or small. Need a
          same-day junk pickup in your area? Just give us a call!
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "18px", color: "#EB4B38", mb: 1 }}
        >
          Why Choose Junk Removal Empire?
        </Typography>
        <Typography mb={1}>
          • Locally Owned & Operated – We proudly serve Brampton and surrounding
          cities
        </Typography>
        <Typography mb={1}>
          • Fast, Reliable & Friendly – Always on time with efficient service
        </Typography>
        <Typography mb={1}>
          • Eco-Friendly Disposal – We donate and recycle whenever possible
        </Typography>
        <Typography mb={1}>
          • Upfront, Affordable Pricing – No surprises.
        </Typography>
        <Typography mb={2}>
          Free quotes every time We’re more than just a junk removal
          company—we’re your clean space partners. Our mission is to make your
          life easier with hassle-free, on-demand junk hauling you can trust.
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "18px", color: "#EB4B38", mb: 1 }}
        >
          Services We Offer:
        </Typography>
        <Typography mb={1}>• Residential Junk Removal</Typography>
        <Typography mb={1}>• Commercial & Office Cleanouts</Typography>
        <Typography mb={1}>• Furniture & Appliance Removal</Typography>
        <Typography mb={1}>
          • Yard Waste & Construction Debris Hauling
        </Typography>
        <Typography mb={1}>
          • Estate, Hoarder & Foreclosure Cleanouts
        </Typography>
        <Typography mb={2}>
          So if you’re searching for “junk removal near me in Brampton,
          Mississauga, or any of the surrounding cities,” Junk Removal Empire is
          the name you can rely on. Contact us today to schedule your pickup and
          let us do the heavy lifting!
        </Typography>
      </Container>
      <WorkingProcess />
      <OurPromises />
    </>
  );
};

export default About;
