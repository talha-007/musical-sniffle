import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  IconButton,
} from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryIcon from "@mui/icons-material/Category";
import HelpIcon from "@mui/icons-material/Help";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { WhatsApp } from "@mui/icons-material";

const drawerWidth = 240;

const navigationItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/admin/dashboard",
  },
  {
    text: "Categories",
    icon: <CategoryIcon />,
    path: "/admin/categories",
  },
  {
    text: "FAQ",
    icon: <HelpIcon />,
    path: "/admin/faq",
  },
  {
    text: "Gallery",
    icon: <PhotoLibraryIcon />,
    path: "/admin/gallery",
  },
  {
    text: "Appointment",
    icon: <CalendarMonthIcon />,
    path: "/admin/appointment",
  },
  {
    text: "WhatsApp Number",
    icon: <WhatsApp />,
    path: "/admin/whatsapp",
  },
];

const AdminLayout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate("/admin/login");
  };

  const renderNavigationItems = () => {
    return navigationItems.map((item) => (
      <ListItem
        key={item.text}
        button
        component={Link}
        to={item.path}
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          sx={{ display: open ? "block" : "none", color: "black" }}
        />
      </ListItem>
    ));
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#1976d2",
          transition: (theme) =>
            theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: (theme) =>
              theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : 65,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 65,
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            overflowX: "hidden",
            backgroundColor: "#f5f5f5",
            borderRight: "1px solid rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: [1],
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <img
            src="/logo.png"
            style={{ width: "60px" }}
            class="img-fluid rounded-top"
            alt=""
          />
        </Toolbar>
        <Box sx={{ overflow: "auto" }}>
          <List>
            {renderNavigationItems()}
            <ListItem
              button
              onClick={handleLogout}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{ display: open ? "block" : "none" }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${open ? drawerWidth : 65}px)` },
          backgroundColor: "#fafafa",
          minHeight: "100vh",
          transition: (theme) =>
            theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          marginLeft: `-${open ? drawerWidth : 65}px`,
          ...(open && {
            transition: (theme) =>
              theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
            marginLeft: 0,
          }),
        }}
      >
        <Toolbar />
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default AdminLayout;
