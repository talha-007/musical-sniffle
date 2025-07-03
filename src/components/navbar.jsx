import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "What We Remove", path: "/what_we_remove" },
  { name: "Gallery", path: "/gallery" },
  { name: "Locations", path: "/locations" },
];

const gradientStyle = {
  background: "linear-gradient(91.4deg, #FECC13 -15.85%, #EB4B38 70.52%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  // Update activeItem whenever location changes
  React.useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (path) => {
    setActiveItem(path);
    handleDrawerToggle();
  };

  const drawer = (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
          color: "text.primary",
        }}
      >
        <CloseIcon />
      </IconButton>
      <List sx={{ mt: 8 }}>
        {pages.map((page) => (
          <ListItem
            key={page.name}
            component={Link}
            to={page.path}
            sx={{
              justifyContent: "center",
              textDecoration: "none",
              ...(page.path === activeItem && gradientStyle),
            }}
            onClick={() => handleNavClick(page.path)}
          >
            <ListItemText
              primary={page.name}
              sx={{
                color: "#000",
                textAlign: "center",
                "& .MuiTypography-root": {
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  fontFamily: "Inter",
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: "center", mt: 2 }}>
          <Button
            component={Link}
            to="/get-started"
            variant="contained"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: { xs: "10px 20px", md: "15px 30px" },
              width: "224px",
              height: "60px",
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
            Get Started
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
        padding: { xs: "0rem 0rem", md: "1rem 0rem" },
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "space-between", ms: "center", md: "center" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: "80px", md: "100px" },
            justifyContent: { xs: "space-between" },
          }}
        >
          {/* Logo */}
          <Box sx={{ width: { xs: "70px", md: "120px" } }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src="/logo.png"
                className="img-fluid rounded-top"
                alt=""
                style={{ width: "100%" }}
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 2,
              position: "relative",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={() => setActiveItem(page.path)}
                sx={{
                  display: "block",
                  textTransform: "none",
                  fontSize: { xs: "16px", md: "18px" },
                  fontFamily: "Inter",
                  fontWeight: 600,
                  lineHeight: "29px",
                  position: "relative",
                  textDecoration: "none",
                  ...(activeItem === page.path
                    ? {
                        ...gradientStyle,
                      }
                    : {
                        color: "text.primary",
                      }),
                  "&:hover": {
                    background: "transparent",
                    ...gradientStyle,
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* CTA Button */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              component={Link}
              to="/get-quote"
              variant="contained"
              sx={{
                display: "flex",
                fontSize: "18px",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: { xs: "10px 20px", md: "15px 30px" },
                height: "60px",
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
              Get a Free Quote
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
