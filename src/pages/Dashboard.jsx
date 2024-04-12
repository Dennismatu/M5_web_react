import React from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Dashboard() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
          <Typography variant="h4">Dashboard</Typography>
          <div>
            <flex className="grid grid-cols-2">
              <div>
                <h1>Number of sites</h1>
                <div className="container border-solid border-2 border-sky-500 w-full h-96"></div>
              </div>
              <div>
                <h1>Total export energy</h1>
                <div className="container border-solid border-2 border-sky-500 w-full h-96"></div>
              </div>
              <div>
                <h1>CO2 reduce</h1>
                <div className="container border-solid border-2 border-sky-500 w-full h-96"></div>
              </div>
              <div>
                <h1>Module type</h1>
                <div className="container border-solid border-2 border-sky-500 w-full h-96"></div>
              </div>
            </flex>
          </div>
        </Box>
      </Box>
    </>
  );
}
