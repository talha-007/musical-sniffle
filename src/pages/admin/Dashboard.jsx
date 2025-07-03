import { Box, Typography, Grid, Paper } from "@mui/material";
import publicRoutes from "../../../redux/api/publicRoutes";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Dashboard = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await publicRoutes.getAllStats();
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const statCards = [
    {
      title: "Total Categories",
      value: data?.total_categories || "0",
      icon: <ShoppingCartIcon />,
      color: "#FECC13",
    },
    {
      title: "Total Appointments",
      value: data?.total_appointments || "0",
      icon: <PendingActionsIcon />,
      color: "#FF9F43",
    },
    // {
    //   title: "Completed Orders",
    //   value: data?.completed_orders || "0",
    //   icon: <CheckCircleIcon />,
    //   color: "#4CAF50",
    // },
    // {
    //   title: "Total Revenue",
    //   value: `$${data?.total_revenue || "0"}`,
    //   icon: <AttachMoneyIcon />,
    //   color: "#2196F3",
    // },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 4,
          color: "#1a1a1a",
        }}
      >
        Dashboard Overview
      </Typography>
      <Grid container spacing={4}>
        {statCards.map((card, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: 160,
                borderRadius: 3,
                background: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  borderColor: card.color,
                  boxShadow: `0 4px 20px ${card.color}15`,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${card.color}15`,
                    color: card.color,
                    mr: 2,
                  }}
                >
                  {card.icon}
                </Box>
                <Typography
                  sx={{
                    color: "#666",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {card.title}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                }}
              >
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
