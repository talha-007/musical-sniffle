import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  TextField,
  IconButton,
  Divider,
  InputAdornment,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WhatsAppButton from "./WhatsAppButton";
import whatsappService from "../../redux/api/whatsAppService";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "How it Works", path: "/what_we_remove" },
    { name: "Pricing", path: "/pricing" },
    { name: "Locations", path: "/locations" },
  ];
  const [whatsappNumber, setWhatsappNumber] = useState("");
  useEffect(() => {
    fetchNumber();
  }, []);

  const fetchNumber = async () => {
    try {
      const res = await whatsappService.getAll();
      if (res.status === 200) {
        setWhatsappNumber(res?.data?.data?.number);
      }
    } catch (err) {
      console.log(err);
      console.log();
    }
  };

  return (
    <Box sx={{ bgcolor: "#111", color: "#fff", pt: 8 }}>
      <WhatsAppButton phoneNumber={whatsappNumber} />
      <Grid
        container
        sx={{
          maxWidth: 1600,
          mx: "auto",
          borderRadius: "20px 20px 0 0",
          overflow: "hidden",
        }}
      >
        {/* Top Footer Content */}
        <Grid
          container
          sx={{
            px: { xs: 3, sm: 6 },
            py: 6,
            borderBottom: "1px solid #222",
          }}
        >
          {/* Left: Logo and Description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box mb={2}>
              <img
                src="/logo.png"
                alt="Logo"
                width={120}
                style={{ marginBottom: 12 }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#ccc", fontSize: 14, lineHeight: 1.8 }}
              >
                <span style={{ color: "#FF6B6B", fontWeight: 600 }}>
                  Junk Removal Empire
                </span>{" "}
                Redefine your surroundings with our effortless, reliable,
                sustainable, and swift junk removal. Let us do the job for you
                while you sit back and unwind!
              </Typography>
            </Box>
          </Grid>

          {/* Middle: Services & Quick Links */}
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              gap: "3rem",
              borderLeft: { md: "1px solid #333" },
              px: { md: 4 },
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Quick links
              </Typography>
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      my: 1,
                      cursor: "pointer",
                      "&:hover .icon": {
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <ChevronRightIcon
                      className="icon"
                      sx={{
                        color: "#EB4B38",
                        transition: "transform 0.3s ease",
                      }}
                    />
                    <Typography
                      sx={{ fontSize: 14, color: "rgba(255,255,255,.7)" }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Right: Newsletter */}
          <Grid size={{ xs: 12, md: 3 }} sx={{ mt: { xs: 4, md: 0 } }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Get Update
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#ccc", mb: 2 }}>
              Sign up for our newsletter and stay updated on the latest waste
              disposal tips, recycling trends, eco-friendly initiatives, and
              service updates.
            </Typography>
            <TextField
              placeholder="Email Address"
              fullWidth
              autoComplete="false"
              sx={{
                "& .MuiOutlinedInput-root": {
                  background: "#1c1c1c",
                  borderRadius: "20px",
                  border: "1px solid #626161",
                  paddingRight: 0, // prevent spacing between input and button
                  height: "70px",
                  "& input": {
                    color: "#fff",
                    padding: "22px 16px",
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{}}>
                    <IconButton
                      sx={{
                        borderRadius: "0px 20px 20px 0px",
                        height: "70px",
                        width: "60px",
                        background:
                          "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
                        color: "#fff",
                        "&:hover": {
                          background:
                            "linear-gradient(91.4deg, #FFD700 -15.85%, #FF6347 70.52%)",
                        },
                      }}
                    >
                      <img
                        src="/send.svg"
                        class="img-fluid rounded-top"
                        alt=""
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Grid size={{ xs: 12 }} sx={{ textAlign: "center", py: 2 }}>
          <Typography variant="body2" sx={{ color: "#aaa", fontSize: 13 }}>
            © 2024 Junkremovalempire.in | Powered By{" "}
            <span style={{ color: "#EB4B38" }}>Mavic Digital</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
