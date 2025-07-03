import { FlagCircleTwoTone } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import ca from "../assets/ca.png";
import us from "../assets/us.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import WorkingProcess from "../components/workingProcess";

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [expandedState, setExpandedState] = useState({});

  const locations = {
    "United States": {
      Georgia: [
        "Alpharetta",
        "Atlanta",
        "Buckhead",
        "Canton",
        "Carrollton",
        "Decatur",
        "Douglasville",
        "Duluth",
        "Dunwoody",
        "East Cobb",
        "Ellenwood",
        "Fulton County",
        "Gainesville",
        "Johns Creek",
        "Kennesaw",
        "Lawrenceville",
        "Mableton",
        "Marietta",
        "McDonough",
        "Midtown Atlanta",
        "Newnan",
        "Old Fourth Ward",
        "Peachtree City",
        "Peachtree Corners",
        "Rome",
        "Roswell",
        "Sandy Springs",
        "Smyrna",
        "Stockbridge",
        "Tucker",
        "Union City",
        "Woodstock",
      ],
      Michigan: [
        "Auburn Hills",
        "Berkley",
        "Birmingham",
        "Clawson",
        "Detroit",
        "Farmington",
        "Farmington Hills",
        "Ferndale",
        "Hazel Park",
        "Madison Heights",
        "Novi",
        "Oak Park",
        "Pontiac",
        "Rochester Hills",
        "Royal Oak",
        "South Lyon",
        "Southfield",
        "Troy",
        "Wixom",
      ],
      Texas: [
        "Arlington",
        "Dallas",
        "Denton",
        "Frisco",
        "Garland",
        "Grand Prairie",
        "Irving",
        "McKinney",
        "Plano",
      ],
    },
    Canada: {
      Alberta: [
        "Acheson",
        "Airdrie",
        "Bearspaw",
        "Beaumont",
        "Calgary",
        "Chestermere",
        "Cochrane",
        "Devon",
        "Edmonton",
        "Fort Saskatchewan",
        "High River",
        "Leduc",
        "Okotoks",
        "Sherwood Park",
        "Spruce Grove",
        "St. Albert",
        "Stony Plain",
        "Strathcona",
        "Strathmore",
        "Summerlea",
        "West Edmonton",
      ],
      "British Columbia": [
        "Abbotsford",
        "Burnaby",
        "Chilliwack",
        "Colwood",
        "Coquitlam",
        "Delta",
        "Downtown Vancouver",
        "East Vancouver",
        "Fraser Valley",
        "Highlands",
        "Ladner",
        "Langford",
        "Langley",
        "Maple Ridge",
        "Mission",
        "New Westminster",
        "North Vancouver",
        "Oak Bay",
        "Pitt Meadows",
        "Port Coquitlam",
        "Port Moody",
        "Richmond",
        "Saanich",
        "Sooke",
        "Surrey",
        "Vancouver",
        "Victoria",
        "View Royal",
        "West Side Vancouver",
        "West Vancouver",
        "White Rock",
      ],
      Manitoba: [
        "East St. Paul",
        "North Transcona",
        "West St. Paul",
        "Winnipeg",
      ],
      "New Brunswick": ["Moncton"],
      "Nova Scotia": [
        "Bedford",
        "Cole Harbour",
        "Dartmouth",
        "Fall River",
        "Halifax",
        "Lower Sackville",
        "Sackville",
        "Tantallon",
        "Timberlea",
      ],
      Ontario: [
        "Acton",
        "Ajax",
        "Alliston",
        "Amherstburg",
        "Ancaster",
        "Aurora",
        "Barrhaven",
        "Barrie",
        "Beamsville-Vineland",
        "Belle River",
        "Belleville",
        "Bolton",
        "Bowmanville",
        "Bracebridge",
        "Bradford",
        "Brampton",
        "Brantford",
        "Brooklin",
        "Burlington",
        "Caledon",
        "Cambridge",
        "Chatham-Kent",
        "Clarington",
        "Collingwood",
        "Concord",
        "Courtice",
        "Dundas",
        "Durham",
        "East Gwillimbury",
        "Echo Bay",
        "Elmira",
        "Elora",
        "Essex",
        "Etobicoke",
        "Fergus",
        "Flamborough",
        "Fort Erie",
        "Gananoque",
        "Garden River",
        "Georgetown",
        "Gloucester",
        "Goulais River",
        "Gravenhurst",
        "Grimsby",
        "Guelph",
        "Halton",
        "Halton Hills",
        "Hamilton",
        "High Park",
        "Ingersoll",
        "Innisfil",
        "Kanata",
        "Keswick",
        "King City",
        "Kingston",
        "Kingsville",
        "Kitchener",
        "Laird",
        "Lakeshore",
        "Lasalle",
        "Leamington",
        "Lindsay",
        "London",
        "Maple",
        "Markham",
        "Midland",
        "Milton",
        "Mississauga",
        "Muskoka",
        "Napanee",
        "Nepean",
        "New Hamburg",
        "New Tecumseth",
        "Newcastle",
        "Newmarket",
        "Niagara",
        "Niagara Falls",
        "Niagara on the Lake",
        "North York",
        "Oakville",
        "Orangeville",
        "Orillia",
        "Orleans",
        "Oshawa",
        "Ottawa",
        "Owen Sound",
        "Paris",
        "Peel",
        "Penetanguishene",
        "Peterborough",
        "Pickering",
        "Port Colborne",
        "Port Credit",
        "Port Hope",
        "Port Perry",
        "Port Severn",
        "Richmond Hill",
        "Sault Ste. Marie",
        "Scarborough",
        "Searchmont",
        "Smithville",
        "St. Catharines",
        "St. Clair Beach",
        "St. Joesph Island",
        "St. Marys",
        "St. Thomas",
        "Stoney Creek",
        "Stouffville",
        "Stratford",
        "Strathroy",
        "Streetsville",
        "Tecumseh",
        "Thornhill",
        "Thorold",
        "Toronto",
        "Trenton",
        "Unionville",
        "Uxbridge",
        "Vaughan",
        "Wasaga Beach",
        "Waterdown",
        "Waterloo",
        "Welland",
        "Whitby",
        "Windsor",
        "Woodbridge",
        "Woodstock",
      ],
      "Prince Edward Island": [
        "Charlottetown",
        "Montague",
        "Prince Edward Island",
        "Sherwood",
        "Stratford",
        "Summerside",
      ],
      Saskatchewan: ["Regina", "Saskatoon"],
    },
  };

  const handleStateClick = (state) => {
    setExpandedState((prev) => ({
      ...prev,
      [state]: !prev[state],
    }));
  };

  return (
    <>
      <Container maxWidth="md" sx={{ mt: { xs: "2rem", md: "4rem" } }}>
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
          Our{" "}
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
            Locations
          </span>
        </Typography>

        <Typography sx={{ textAlign: "center" }}>
          Find a fast & friendly JUNKREMOVALEMPIRE® location in your
          neighborhood.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, my: 3 }}>
          <Button
            startIcon={<img src={ca} alt="Canada" />}
            sx={{
              background: "#f3f5f3",
              color: "#494949",
              borderRadius: "10px",
              padding: { xs: "10px 10px", md: "10px 20px" },
            }}
            onClick={() => setSelectedLocation("Canada")}
          >
            Canada
          </Button>
          <Button
            sx={{
              background: "#f3f5f3",
              color: "#494949",
              borderRadius: "10px",
              padding: { xs: "10px 10px", md: "10px 20px" },
            }}
            startIcon={<img src={us} alt="United States" />}
            onClick={() => setSelectedLocation("United States")}
          >
            United States
          </Button>
        </Box>

        {selectedLocation && (
          <Box sx={{ my: 3 }}>
            <Grid container spacing={2}>
              {Object.keys(locations[selectedLocation]).map((state) => (
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box key={state}>
                    <Button
                      fullWidth
                      onClick={() => handleStateClick(state)}
                      sx={{
                        justifyContent: "space-between",
                        textAlign: "left",
                        background: "#f3f5f3",
                        color: "#494949",

                        "&:hover": {
                          background: "#e8e8e8",
                        },
                      }}
                    >
                      {state}
                      {expandedState[state] ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </Button>
                    <Collapse in={expandedState[state]}>
                      <List sx={{ pl: 2, background: "#f3f5f3" }}>
                        {locations[selectedLocation][state].map((city) => (
                          <ListItem key={city} sx={{ py: 0.5 }}>
                            <ListItemText
                              primary={city}
                              sx={{
                                "& .MuiListItemText-primary": {
                                  fontSize: "0.9rem",
                                  color: "#494949",
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
      <WorkingProcess />
    </>
  );
};

export default Locations;
