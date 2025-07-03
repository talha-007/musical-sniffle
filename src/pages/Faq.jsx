import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { OurPromises } from "../components/OurPromises";
import truckImage from "../assets/guys-with-truck.png";
import publicRoutes from "../../redux/api/publicRoutes";

const data = [
  {
    question: "What do you do?",
    answer:
      "We remove junk and unwanted materials/items from residential and commercial properties. Our rates include all labour, loading of the materials from anywhere on your property, clean up and all disposal/recycling fees. We provide all customers with an up-front written estimate before any work begins.",
  },
  {
    question: "What type of things do you remove?",
    answer:
      "We will remove almost anything provided it can be lifted by two people and is not hazardous. Examples include: Furniture – Couch, sofa-bed, mattress, armchair, cupboard, filing cabinets. Appliances – fridge, freezer, washer, dryer, computer, stereo, printer, TV, fax machine. Cellar, loft & garage – boxes, books, kitchenware, tools, clothes, fireplace, lawnmower. Garden refuse – branches, grass, leaves, soil, dirt, sod, compost, turf. Wood – fencing, firewood, lumber, plywood, shed, gate. Construction/ demolition – plaster, drywall, broken patio, pallet, crate, glass, concrete. Roofing / Flooring – tiles, asphalt, carpet, wood, flooring. We can not remove Hazardous Materials, including paint, chemicals, solvents, motor oils, asbestos, propane tanks, creosote (railway ties), biological or medical-related waste.",
  },
  {
    question: "Why can't you take hazardous materials?",
    answer:
      "We are not licensed or insured to carry hazardous materials. Call your local recycling or waste management hotline for further assistance.",
  },
  {
    question: "Are you insured and licensed?",
    answer:
      "Yes. Our trucks and labourers are fully licensed and insured in case of accidental damage or injury. We are also approved by environmental authorities to haul away household and commercial junk.",
  },
  {
    question: "Do you provide moving services?",
    answer:
      "No. Our trucks are not properly equipped and we are not insured to move.",
  },
  {
    question: "Do you recycle and donate?",
    answer:
      "Yes. We donate any reusable furniture, electronics, clothing and homewares to local charities. Even salvageable construction debris is donated to Habitat for Humanity. We also recycle paper, metals, concrete and various other materials, keeping as much as 60% of your junk out of landfills.",
  },
  {
    question: "Why do you charge?",
    answer:
      "Just Junk needs to cover the costs of transport, labour and disposal of your materials (disposal fees are based on the weight of the debris).",
  },
  {
    question: "How do you charge?",
    answer:
      "In general, we charge by volume in terms of how much space your junk takes up in our truck. However, if you are wishing to dispose of heavier materials such as concrete or plaster surcharges would apply as we need to account for the additional disposal fees.",
  },
  {
    question: "Why can't you give me an exact price over the phone?",
    answer:
      "Our rates are based on the amount and type of junk being removed. Until we see what is to be removed, we can't provide you with an exact price. Once on-site, simply indicate what you would like us to remove and a service representative will provide you with a no-obligation free estimate. If you're pleased with the quote we come prepared to begin the job right away!",
  },
  {
    question: "How much notice do you require?",
    answer:
      "In most instances, we can be out to your location within a 24-48 hour time frame. If you are looking to get your junk removed on a specific day and time please call our office in advance to schedule ahead.",
  },
  {
    question: "Why are appointments booked in two-hour windows?",
    answer:
      "To allow for unforeseen circumstances, such as traffic or jobs that were larger than expected, appointments are booked in two-hour slots. The truck team will call 15 to 30 minutes before arrival to let you know exactly when they are on their way.",
  },
  {
    question: "Do I have to be at the property to have the job done?",
    answer:
      "Not always. Provided we can access your materials and have a solid understanding as to what needs to be removed, we will call you once on site with an exact quote. If you have us proceed we'll process your credit card remotely upon completion. A copy of the quote, invoice, receipt and fridge magnet will either be left in the mailbox or mailed to a secondary location for you.",
  },
  {
    question: "How big is your truck?",
    answer:
      "Our truck holds up to 15 cubic yards or 400 cubic feet measuring 10 ft. (L) x 8 ft. (W) x 5 ft. (H).",
  },
  {
    question: "What is a cubic yard/cubic foot?",
    answer:
      "A cubic yard is 3 ft. high x 3 ft. wide x 3 ft deep, equivalent to 27 cubic feet. A cubic foot is a block 1 ft. high x 1 ft. long x 1 ft. deep. Using the rate card, a service representative will quantify the amount of junk you have in cubic yards or cubic feet and assess the nature of the materials you are wishing to dispose of before providing you with a quote.",
  },
  {
    question: "What equipment does your truck come with?",
    answer:
      "Aside from the two strong labourers our trucks come equipped with disposal bins, dolly, garbage bags and various small tools to ensure that your junk is removed in a safe and timely manner.",
  },
  {
    question: "What do you do to prevent damage to my property?",
    answer:
      "In cases where we are removing junk from inside your home or business, we're extra careful to ensure that no damage occurs to your walls and floors. For your peace of mind and ours, we are fully insured in case of accidental damage or injury.",
  },
  {
    question: "What do you do with the junk?",
    answer:
      "Over 60% of the material removed from homes and businesses is donated to either a local charity or recycled. The remaining material is disposed of at a landfill or transfer station for further processing.",
  },
  {
    question: "Where is your company located?",
    answer:
      "We have Franchises in almost every city in Canada. Please see our Locations page for more information on our local franchises.",
  },
  {
    question: "Why use your service instead of a disposal bin?",
    answer:
      "We do all the loading and clean up for you and our charges reflect only the volume of junk we remove. In most instances, when you rent a bin you have to pay for the entire volume, regardless of how much space you utilize. In many cases, others will throw junk into your bin leaving you with the cost of disposal. In most cases our prices remain competitive with disposal bins, we recycle a lot more – and provide all labour!",
  },
];
const Faq = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        const response = await publicRoutes.getAllFaqs();
        console.log("response", response);

        setFaqData(response?.data?.data);
        setError(null);
      } catch {
        setError("Failed to load FAQ data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  if (loading) {
    return (
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <CircularProgress sx={{ color: "#FECC13" }} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Button
          variant="contained"
          onClick={() => window.location.reload()}
          sx={{
            background: "#FECC13",
            "&:hover": {
              background: "#e6b800",
            },
          }}
        >
          Retry
        </Button>
      </Container>
    );
  }

  return (
    <>
      <Container maxWidth="md">
        <Typography
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            color: "#FECC13",
            fontSize: { xs: "1.5rem", md: "3rem" },
            fontWeight: "bold",
            my: 4,
          }}
        >
          Frequently Asked Questions
        </Typography>

        <div className="faq-content">
          <div className="top-faq-content">
            <Typography sx={{ fontSize: "14px", mb: 2 }}>
              We remove junk unwanted materials/items from residential and
              commercial properties. Our rates include all labour, loading of
              the materials from anywhere on your property, clean up and all
              disposal/recycling fees. We provide all customers with an up-front
              written estimate before any work begins.
            </Typography>
            <div className="book-now">
              <Button
                sx={{
                  background: "#FECC13",
                  borderRadius: "5px",
                  boxShadow: "0px 5px 0px #fecb1360",
                  color: "#fff",
                }}
                href="/book"
              >
                Book Online <i className="fa fa-chevron-right"></i>
              </Button>
            </div>
          </div>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              className="aligncenter"
              src={truckImage}
              alt="Service team with truck"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>

          <Divider sx={{ my: 2, width: "40%", mx: "auto" }} />

          {faqData.length === 0 ? (
            <Alert severity="info" sx={{ my: 4 }}>
              No FAQ items available at the moment.
            </Alert>
          ) : (
            <Box sx={{ my: 4 }}>
              {faqData.map((faq, index) => (
                <Box mb={3} key={index}>
                  <Typography
                    sx={{
                      color: "#FECC13",
                      fontSize: "28px",
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {faq.question}
                  </Typography>
                  <Box>
                    <Typography sx={{ fontSize: "14px" }}>
                      {faq.answer}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </div>
      </Container>
      <OurPromises />
    </>
  );
};

export default Faq;
