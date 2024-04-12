import React from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Buttontrans from "../components/Buttontrans";

export default function AppLocation() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
          <Typography variant="h4">Add Locations</Typography>
          <Buttontrans />
        </Box>
      </Box>
    </>
  );
}
